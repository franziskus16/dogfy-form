<script setup lang="ts">
import { ref } from "vue";
import { useFormStore } from "../../store/form";
import BaseButton from "../base/BaseButton.vue";
import BaseSelect from "../base/BaseSelect.vue";

const form = useFormStore();
const dietGoal = ref(form.data.dietGoal || "");

function saveAndContinue() {
  if (dietGoal.value) {
    form.updateField("dietGoal", dietGoal.value);
    form.goToNextStep();
  }
}
</script>

<template>
  <div class="flex flex-col items-center text-center space-y-14">
    <h2 class="text-custom-lg font-semibold mb-4 text-center">
      ¿Qué dieta crees que le irá mejor a {{ form.data.petName }}?
    </h2>
    <BaseSelect
      v-model="dietGoal"
      placeholder="Selecciona una opción"
      :options="[
        { value: 'Pérdida de peso', label: 'Pérdida de peso' },
        { value: 'Aumento de peso', label: 'Aumento de peso' },
        { value: 'Mantenimiento', label: 'Mantenimiento' },
        { value: 'other', label: 'Otro' },
      ]"
      data-testid="diet-goal-select"
    />
    <BaseButton
      :disabled="!dietGoal"
      variant="primary"
      @click="saveAndContinue"
    >
      Siguiente
    </BaseButton>
  </div>
</template>
