import { defineStore } from "pinia";
import { Group } from "../domains/form/entities/Group";
import type { FormData } from "../domains/form/entities/FormData";
import { logAnalytics } from "../infrastructure/analytics/logger";

const STORAGE_KEY = "dogfy_form_state";

export const useFormStore = defineStore("form", {
  state: () => ({
    data: {} as FormData,
    currentStep: 0,
    group: Group.A as Group,
    steps: [
      "breed",
      "petName",
      "petAge",
      "petWeight",
      "dietGoal",
      "foodPreferences",
      "activityLevel",
      "summary",
    ],
  }),

  actions: {
    init() {
      const saved = localStorage.getItem(STORAGE_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);
        this.group = parsed.group;
        this.currentStep = parsed.currentStep;
        this.data = parsed.data;
      } else {
        const storedGroup = localStorage.getItem("form_group") as Group | null;

        if (storedGroup) {
          this.group = storedGroup;
        } else {
          const random = Math.random() < 0.5 ? Group.A : Group.B;
          this.group = random;

          logAnalytics("ab_group_assigned", { group: this.group });
          localStorage.setItem("form_group", this.group);
        }

        this.currentStep = 0;
        this.data = {
          breed: "",
          breedImage: null,
          petName: "",
          petAge: 0,
          petWeight: 0,
          dietGoal: "",
          foodPreferences: [],
          activityLevel: "",
        };

        this.saveState();
      }
    },

    saveState() {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          group: this.group,
          currentStep: this.currentStep,
          data: this.data,
        })
      );
    },

    goToNextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
        this.saveState();
      }
    },

    goToPreviousStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
        this.saveState();
      }
    },

    updateField<K extends keyof FormData>(field: K, value: FormData[K]) {
      this.data[field] = value;
      this.saveState();
    },

    setGroup(group: Group) {
      this.group = group;
      localStorage.setItem("form_group", this.group);
      this.saveState();
    },

    completeForm() {
      logAnalytics("form_completed", {
        group: this.group,
        data: this.data,
      });
    },

    reset() {
      localStorage.removeItem(STORAGE_KEY);
      localStorage.removeItem("form_group");

      this.group = Math.random() < 0.5 ? Group.A : Group.B;
      localStorage.setItem("form_group", this.group);

      this.currentStep = 0;
      this.data = {
        breed: "",
        breedImage: null,
        petName: "",
        petAge: 0,
        petWeight: 0,
        dietGoal: "",
        foodPreferences: [],
        activityLevel: "",
      };
      this.saveState();
    },
  },
});
