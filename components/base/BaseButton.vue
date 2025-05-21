<!-- components/base/BaseButton.vue -->
<script setup lang="ts">
defineProps<{
  variant?: "primary" | "secondary";
  type?: "button" | "submit";
  disabled?: boolean;
}>();

const emit = defineEmits(["click"]);
</script>

<template>
  <button
    :type="type || 'button'"
    :disabled="disabled"
    @click="$emit('click')"
    :class="[
      'rounded px-4 py-2',
      variant === 'primary' ? 'bg-yellow-400' : 'bg-gray-800',
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer',
    ]"
  >
    <slot />
  </button>
</template>
<style scoped lang="css">
button {
  align-items: center;
  background-color: #ef6948;
  border: 1px solid transparent;
  border-radius: 100px;
  box-sizing: border-box;
  color: #fff;
  display: flex;
  flex-direction: row;
  font-family: Manrope, sans-serif;
  font-size: 17.15px;
  font-weight: 500;
  gap: 0.5rem;
  justify-content: center;
  line-height: 1.35;
  min-height: 64px;
  min-width: 200px;
  padding: 0.75rem 1.5rem;
  text-align: center;
  text-decoration: none;
  transition: color 0.2s, background-color 0.2s;
}
button:disabled {
  background-color: #d6d6d6;
  color: #3d3d3d4d;
  cursor: inherit;
}
button:hover:not(:disabled) {
  background-color: #b73a2e;
}
</style>
