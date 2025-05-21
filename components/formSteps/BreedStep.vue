<!-- components/formSteps/BreedStep.vue -->
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useFormStore } from "../../store/form";
import BaseButton from "../base/BaseButton.vue";
import BaseSelect from "../base/BaseSelect.vue";

const form = useFormStore();
const breeds = ref<{ id: number; name: string; image: string | null }[]>([]);
const selectedBreedImage = computed(() => {
  return (
    breeds.value.find((b) => b.name === selectedBreed.value)?.image ?? undefined
  );
});
const selectedId = ref<number | null>(null);
const selectedBreed = ref<string>("");

onMounted(async () => {
  const res = await fetch("/api/breeds");
  breeds.value = await res.json();

  if (form.data.breed) {
    selectedBreed.value = form.data.breed;
    const breed = breeds.value.find((b) => b.name === form.data.breed);
    selectedId.value = breed?.id || null;
  }
});

function saveAndContinue() {
  if (!selectedBreed.value) return;

  const breed = breeds.value.find((b) => b.name === selectedBreed.value);
  form.updateField("breed", selectedBreed.value);
  form.updateField("breedImage", breed?.image || null);

  form.goToNextStep();
}
</script>

<template>
  <div class="flex flex-col items-center text-center space-y-14">
    <h2 class="text-custom-lg font-semibold mb-4 text-center">
      ¿Cúal es la raza de tu perrhijo?
    </h2>
    <BaseSelect
      v-model="selectedBreed"
      :options="
        breeds.map((breed) => ({ value: breed.name, label: breed.name }))
      "
      placeholder="Selecciona una raza"
    />
    <div v-if="selectedBreed">
      <img
        v-if="selectedBreedImage"
        :src="selectedBreedImage"
        alt="Imagen de la raza"
        class="w-64 h-auto mb-4 rounded shadow"
      />
      <p v-else class="text-sm text-gray-500">No hay imagen disponible.</p>
    </div>

    <BaseButton
      :disabled="!selectedBreed"
      variant="primary"
      @click="saveAndContinue"
    >
      Siguiente
    </BaseButton>
  </div>
</template>
