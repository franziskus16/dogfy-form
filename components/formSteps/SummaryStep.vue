<script setup lang="ts">
import { ref } from "vue";
import { useFormStore } from "../../store/form";
import BaseButton from "../base/BaseButton.vue";

const form = useFormStore();
const formSubmitted = ref(false);

function goBack() {
  form.goToPreviousStep();
}

function submitForm() {
  form.completeForm();
  formSubmitted.value = true;
}
</script>

<template>
  <div class="flex flex-col items-center text-center space-y-14">
    <h2 class="text-custom-lg font-semibold mb-4 text-center">
      Resumen de los datos de {{ form.data.petName }}
    </h2>
    <ul class="mb-6 space-y-2">
      <li><strong>Raza:</strong> {{ form.data.breed }}</li>
      <li><strong>Nombre de la mascota:</strong> {{ form.data.petName }}</li>
      <li><strong>Edad de la mascota:</strong> {{ form.data.petAge }}</li>
      <li><strong>Peso de la mascota:</strong> {{ form.data.petWeight }} kg</li>
      <li><strong>Objetivo de dieta:</strong> {{ form.data.dietGoal }}</li>
      <li>
        <strong>Preferencias de comida:</strong>
        {{ form.data.foodPreferences || "Ninguna" }}
      </li>
      <li>
        <strong>Nivel de actividad:</strong> {{ form.data.activityLevel }}
      </li>
      <li><strong>Grupo:</strong> {{ form.group }}</li>
    </ul>

    <div class="flex justify-between pb-5">
      <BaseButton v-if="!formSubmitted" variant="primary" @click="submitForm">
        Enviar
      </BaseButton>
      <p
        v-if="formSubmitted"
        class="text-orange-600 text-4xl font-semibold"
        data-testid="success-message"
      >
        Formulario enviado con éxito!
      </p>
    </div>
  </div>
</template>
