<script setup lang="ts">
import { ref } from "vue";
import { useFormStore } from "../../store/form";
import BaseButton from "../base/BaseButton.vue";
import BaseInput from "../base/BaseInput.vue";

const form = useFormStore();
const age = ref(form.data.petAge || 0);

function saveAndContinue() {
  if (age.value) {
    form.updateField("petAge", age.value);
    form.goToNextStep();
  }
}
</script>

<template>
  <div class="flex flex-col items-center text-center space-y-14">
    <h2 class="text-custom-lg font-semibold mb-4 text-center">
      ¿Qué edad tiene {{ form.data.petName }}?
    </h2>
    <BaseInput v-model="age" placeholder="0" />
    <BaseButton :disabled="!age" variant="primary" @click="saveAndContinue">
      Siguiente
    </BaseButton>
  </div>
</template>
