import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  devtools: false,
  runtimeConfig: {
    DOG_API_KEY: process.env.DOG_API_KEY || "",
  },
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@nuxtjs/storybook"],
  css: ["@/assets/tailwind.css"],
  typescript: {
    strict: true,
  },
});
