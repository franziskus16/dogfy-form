<script setup lang="ts">
import { ref } from "vue";
import { useFormStore } from "../../store/form";
import BaseButton from "../base/BaseButton.vue";
import BaseSelect from "../base/BaseSelect.vue";

const form = useFormStore();
const activityLevel = ref(form.data.activityLevel || "");

function saveAndContinue() {
  if (activityLevel.value) {
    form.updateField("activityLevel", activityLevel.value);
    form.goToNextStep();
  }
}
</script>

<template>
  <div class="flex flex-col items-center text-center space-y-14">
    <h2 class="text-custom-lg font-semibold mb-4 text-center">
      ¿Cuál es el nivel de actividad de {{ form.data.petName }}?
    </h2>
    <BaseSelect
      v-model="activityLevel"
      placeholder="Selecciona una opción"
      :options="[
        { value: 'low', label: 'Bajo' },
        { value: 'medium', label: 'Medio' },
        { value: 'high', label: 'Alto' },
      ]"
    />
    <BaseButton
      :disabled="!activityLevel"
      variant="primary"
      @click="saveAndContinue"
    >
      Siguiente
    </BaseButton>
  </div>
</template>
