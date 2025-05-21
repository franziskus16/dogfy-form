<script setup lang="ts">
import { useRouter } from "vue-router";
import Header from "~/components/common/Header.vue";
const router = useRouter();

const startForm = () => {
  router.push("/form");
};
</script>

<template>
  <Header />
  <div class="relative h-screen text-white overflow-hidden">
    <div class="absolute inset-0">
      <img
        src="https://news.harvard.edu/wp-content/uploads/2023/11/dog_brains_2500.png?resize=2048,1152"
        alt="Background Image"
        class="object-cover object-center w-full h-full"
      />
      <div class="absolute inset-0 bg-black opacity-60"></div>
    </div>
    <div
      class="relative z-10 min-h-screen flex items-center flex-col justify-center"
    >
      <h1 class="text-5xl font-bold leading-tight mb-4">
        Pon comida de verdad en el bol de tu perro
      </h1>
      <p class="text-lg text-gray-300 mb-8">
        Comida natural para perros, completa y equilibrada. Elaborada por
        nutricionistas
      </p>
      <div class="flex flex-col max-w-md w-full p-6 items-center text-center">
        <BaseButton variant="primary" @click="startForm">
          Crea su menú
        </BaseButton>
      </div>
    </div>
  </div>
</template>
