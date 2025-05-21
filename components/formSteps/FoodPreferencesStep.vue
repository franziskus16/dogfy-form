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

    <div class="flex flex-row space-x-10 justify-center w-full">
      <label class="flex flex-col items-center cursor-pointer">
        <input
          type="radio"
          name="foodPreference"
          value="selectivo"
          v-model="foodPreference"
          class="accent-orange-600 mb-2"
        />
        <span class="text-sm">
          <strong class="block text-md text-orange-700 mb-1">Selectivo:</strong>
          no se acaba la comida
        </span>
      </label>

      <label class="flex flex-col items-center cursor-pointer">
        <input
          type="radio"
          name="foodPreference"
          value="gourmet"
          v-model="foodPreference"
          class="accent-orange-600 mb-2"
        />
        <span class="text-sm">
          <strong class="block text-md text-orange-700 mb-1">Gourmet:</strong>
          prueba cosas nuevas
        </span>
      </label>

      <label class="flex flex-col items-center cursor-pointer">
        <input
          type="radio"
          name="foodPreference"
          value="gloton"
          v-model="foodPreference"
          class="accent-orange-600 mb-2"
        />
        <span class="text-sm">
          <strong class="block text-md text-orange-700 mb-1">Glotón:</strong>
          devora todo
        </span>
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
