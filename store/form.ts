import { defineStore } from "pinia";
import { Group } from "../domains/form/entities/Group";
import { FormData } from "../domains/form/entities/FormData";

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
      const random = Math.random() < 0.5 ? "A" : "B";
      this.group = random as Group;

      this.currentStep = 0;
      this.data = {
        breed: "",
        breedImage: null,
        petName: "",
        petAge: 0,
        petWeight: 0,
        dietGoal: "",
        foodPreferences: 0,
        activityLevel: "",
      };
    },

    goToNextStep() {
      if (this.currentStep < this.steps.length - 1) {
        this.currentStep++;
      }
    },

    goToPreviousStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },

    updateField<K extends keyof FormData>(field: K, value: FormData[K]) {
      this.data[field] = value;
    },

    setGroup(group: Group) {
      this.group = group;
    },
  },
});
