import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useFormStore } from "./form";
import { Group } from "../domains/form/entities/Group";

// Mock global de localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

describe("Form Store", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorageMock.clear();
    vi.stubGlobal("localStorage", localStorageMock);
  });

  describe("A/B Group Assignment", () => {
    it("assigns a random group if none is stored", () => {
      const store = useFormStore();
      store.init();

      expect([Group.A, Group.B]).toContain(store.group);
      expect(localStorageMock.getItem("form_group")).toBe(store.group);
    });

    it("uses the stored group if already present", () => {
      localStorageMock.setItem("form_group", Group.B);
      const store = useFormStore();
      store.init();

      expect(store.group).toBe(Group.B);
    });
  });

  describe("Persistence", () => {
    it("loads saved state from localStorage on init", () => {
      const savedState = {
        group: Group.B,
        currentStep: 3,
        data: {
          breed: "Bulldog",
          breedImage: null,
          petName: "Perla",
          petAge: 5,
          petWeight: 10,
          dietGoal: "Weight Loss",
          foodPreferences: 1,
          activityLevel: "Medium",
        },
      };
      localStorageMock.setItem("dogfy_form_state", JSON.stringify(savedState));

      const store = useFormStore();
      store.init();

      expect(store.group).toBe(Group.B);
      expect(store.currentStep).toBe(3);
      expect(store.data.petName).toBe("Perla");
      expect(store.data.breed).toBe("Bulldog");
    });

    it("saves state to localStorage when updating field", () => {
      const store = useFormStore();
      store.init();

      store.updateField("petName", "Laika");

      const saved = JSON.parse(localStorageMock.getItem("dogfy_form_state")!);

      expect(saved.data.petName).toBe("Laika");
    });

    it("saves state when advancing step", () => {
      const store = useFormStore();
      store.init();

      store.goToNextStep();

      const saved = JSON.parse(localStorageMock.getItem("dogfy_form_state")!);

      expect(saved.currentStep).toBe(1);
    });

    it("reset clears and reinitializes state", () => {
      const store = useFormStore();
      store.init();

      store.updateField("petName", "Rocky");
      store.goToNextStep();

      store.reset();

      const savedRaw = localStorageMock.getItem("dogfy_form_state");
      expect(savedRaw).not.toBeNull();

      const saved = JSON.parse(savedRaw!);

      expect(store.currentStep).toBe(0);
      expect(store.data.petName).toBe("");
      expect(saved.currentStep).toBe(0);
      expect(saved.data.petName).toBe("");
    });
  });
});
