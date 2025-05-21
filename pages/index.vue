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
  <div class="min-h-screen flex items-center justify-center">
    <div
      class="flex flex-col max-w-md w-full bg-white p-6 items-center rounded-lg text-center"
    >
      <h1 class="text-2xl font-bold mb-6">Crea el menú de tu perro</h1>
      <BaseButton variant="primary" @click="startForm">
        Crea su menú
      </BaseButton>
    </div>
  </div>
</template>
