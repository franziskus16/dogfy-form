<template>
  <div class="w-full bg-gray-200 h-2 fixed top-16 left-0 z-50">
    <div
      class="bg-yellow-400 h-2 rounded transition-all duration-300"
      :style="{
        width: ((props.currentStep + 1) / props.totalSteps) * 100 + '%',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  currentStep: number;
  totalSteps: number;
}>();

const progress = Math.round(((props.currentStep + 1) / props.totalSteps) * 100);
</script>
