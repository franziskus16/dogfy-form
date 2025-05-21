<script setup lang="ts">
import { ref } from "vue";
import { useFormStore } from "../../store/form";
import BaseButton from "../base/BaseButton.vue";
import BaseInput from "../base/BaseInput.vue";

const form = useFormStore();
const weight = ref(form.data.petWeight || 0);

function saveAndContinue() {
  if (weight.value) {
    form.updateField("petWeight", weight.value);
    form.goToNextStep();
  }
}
</script>

<template>
  <div class="flex flex-col items-center text-center space-y-14">
    <h2 class="text-custom-lg font-semibold mb-4 text-center">
      ¿Cuánto pesa {{ form.data.petName }}? (en kg)
    </h2>
    <BaseInput v-model="weight" type="number" unit="Kg" />
    <BaseButton :disabled="!weight" variant="primary" @click="saveAndContinue">
      Siguiente
    </BaseButton>
  </div>
</template>
