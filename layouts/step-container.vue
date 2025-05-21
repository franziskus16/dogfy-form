<!-- layouts/StepContainer.vue -->
<script setup>
import Header from "~/components/common/Header.vue";
import ProgressBar from "~/components/common/ProgressBar.vue";
import { useFormStore } from "~/store/form";

const form = useFormStore();
</script>

<template>
  <Header />
  <ProgressBar
    :currentStep="form.currentStep"
    :totalSteps="form.steps.length"
  />
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="max-w-md w-full">
      <slot />
    </div>
  </div>
</template>
