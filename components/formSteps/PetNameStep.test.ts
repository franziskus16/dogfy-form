import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import PetNameStep from "./PetNameStep.vue";
import { createPinia, setActivePinia } from "pinia";
import { useFormStore } from "../../store/form";

describe("PetNameStep.vue", () => {
  let store: ReturnType<typeof useFormStore>;
  let pinia: ReturnType<typeof createPinia>;

  beforeEach(() => {
    pinia = createPinia();
    setActivePinia(pinia);

    store = useFormStore();

    // Mock actions to spy on them
    store.updateField = vi.fn();
    store.goToNextStep = vi.fn();

    // Initialize state
    store.data.breed = "Labrador";
    store.data.breedImage = "https://example.com/labrador.jpg";
    store.data.petName = "";
  });

  it("renders the breed in the question", () => {
    const wrapper = mount(PetNameStep, {
      global: { plugins: [pinia] },
    });
    expect(wrapper.text()).toContain("¿Cómo se llama tu Labrador?");
  });

  it("renders breed image if present", () => {
    const wrapper = mount(PetNameStep, {
      global: { plugins: [pinia] },
    });
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
    expect(img.attributes("src")).toBe("https://example.com/labrador.jpg");
  });

  it("disables button when name is empty", () => {
    const wrapper = mount(PetNameStep, {
      global: { plugins: [pinia] },
    });
    const button = wrapper.find("button");
    expect(button.attributes("disabled")).toBeDefined();
  });

  it("saves name and goes to next step when filled", async () => {
    const wrapper = mount(PetNameStep, {
      global: { plugins: [pinia] },
    });

    const input = wrapper.find("input");
    await input.setValue("Firulais");

    const button = wrapper.find("button");
    await button.trigger("click");

    expect(store.updateField).toHaveBeenCalledWith("petName", "Firulais");
    expect(store.goToNextStep).toHaveBeenCalled();
  });
});
