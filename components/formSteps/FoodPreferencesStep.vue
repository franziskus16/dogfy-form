<script setup lang="ts">
import { ref } from "vue";
import { useFormStore } from "../../store/form";
import BaseButton from "../base/BaseButton.vue";

const form = useFormStore();

const foodPreference = ref(form.data.foodPreferences || "");

function saveAndContinue() {
  if (foodPreference.value) {
    form.updateField("foodPreferences", foodPreference.value);
    form.goToNextStep();
  }
}
</script>

<template>
  <div class="flex flex-col items-center text-center space-y-14">
    <h2 class="text-custom-lg font-semibold">
      ¿Cómo se comporta {{ form.data.petName }} con la comida?
    </h2>

    <div class="space-y-4 w-full text-left">
      <label class="flex items-center space-x-3">
        <input
          type="radio"
          name="foodPreference"
          value="selectivo"
          v-model="foodPreference"
          class="accent-blue-600"
        />
        <span>Selectivo: no se acaba la comida</span>
      </label>

      <label class="flex items-center space-x-3">
        <input
          type="radio"
          name="foodPreference"
          value="gourmet"
          v-model="foodPreference"
          class="accent-blue-600"
        />
        <span>Gourmet: prueba cosas nuevas</span>
      </label>

      <label class="flex items-center space-x-3">
        <input
          type="radio"
          name="foodPreference"
          value="gloton"
          v-model="foodPreference"
          class="accent-blue-600"
        />
        <span>Glotón: devora todo</span>
      </label>
    </div>

    <BaseButton
      :disabled="!foodPreference"
      variant="primary"
      @click="saveAndContinue"
    >
      Siguiente
    </BaseButton>
  </div>
</template>
