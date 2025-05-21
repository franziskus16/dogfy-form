<script setup lang="ts">
import { useFormStore } from "../store/form";
import { computed } from "vue";
import StepContainer from "@/layouts/step-container.vue";
import PetNameStep from "./formSteps/PetNameStep.vue";
import PetAgeStep from "./formSteps/PetAgeStep.vue";
import PetWeightStep from "./formSteps/PetWeightStep.vue";
import DietGoalStep from "./formSteps/DietGoalStep.vue";
import FoodPreferencesStep from "./formSteps/FoodPreferencesStep.vue";
import ActivityLevelStep from "./formSteps/ActivityLevelStep.vue";
import SummaryStep from "./formSteps/SummaryStep.vue";
import BreedStep from "./formSteps/BreedStep.vue";

const form = useFormStore();

onMounted(() => {
  form.init();
});
const components: Record<string, any> = {
  breed: BreedStep,
  petName: PetNameStep,
  petAge: PetAgeStep,
  petWeight: PetWeightStep,
  dietGoal: DietGoalStep,
  foodPreferences: FoodPreferencesStep,
  activityLevel: ActivityLevelStep,
  summary: SummaryStep,
};

const currentStepName = computed(() => form.steps[form.currentStep]);
const currentComponent = computed(() => components[currentStepName.value]);
</script>

<template>
  <Transition
    mode="out-in"
    enter-active-class="transition-opacity duration-300"
    leave-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <component :is="currentComponent"
  /></Transition>
</template>
