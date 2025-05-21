<script setup lang="ts">
import { ref, computed } from "vue";
import { useFormStore } from "../../store/form";
import BaseButton from "../base/BaseButton.vue";
import BaseInput from "../base/BaseInput.vue";

const form = useFormStore();
const name = ref(form.data.petName || "");
const breedImage = computed(() => form.data.breedImage);

function saveAndContinue() {
  if (name.value) {
    form.updateField("petName", name.value);
    form.goToNextStep();
  }
}
</script>

<template>
  <div class="flex flex-col items-center text-center space-y-14">
    <h2 class="text-custom-lg font-semibold mb-4 text-center">
      ¿Cómo se llama tu {{ form.data.breed }}?
    </h2>
    <img
      v-if="breedImage"
      :src="breedImage"
      alt="Imagen de la raza"
      class="w-40 h-auto rounded"
    />
    <BaseInput v-model="name" placeholder="Mi perro se llama..." />
    <BaseButton :disabled="!name" variant="primary" @click="saveAndContinue">
      Siguiente
    </BaseButton>
  </div>
</template>
