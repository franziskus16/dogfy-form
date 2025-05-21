<script setup lang="ts">
const props = defineProps<{
  label?: string;
  modelValue: string | number;
  type?: string;
  placeholder?: string;
  unit?: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

function onInput(e: Event) {
  emit("update:modelValue", (e.target as HTMLInputElement).value);
}
</script>

<template>
  <div>
    <label
      v-if="props.label"
      class="block mb-1 text-sm font-medium text-gray-700"
    >
      {{ props.label }}
    </label>
    <div class="relative w-full">
      <input
        :type="props.type || 'text'"
        :placeholder="placeholder"
        :value="props.modelValue"
        @input="onInput"
        class="input"
        :class="{ 'pr-12': unit }"
      />
      <span
        v-if="unit"
        class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm pointer-events-none"
      >
        {{ unit }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.input {
  background-color: #fff;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  box-sizing: border-box;
  color: #3d3d3d;
  font-family: Manrope, sans-serif;
  font-size: 17.15px;
  font-weight: 400;
  height: 56px;
  line-height: 1.35;
  max-width: 100%;
  padding: 0 1rem;
  width: 100%;
  transition: border-color 0.2s;
}

.input:focus {
  outline: none;
  border-color: #0070f3;
}

.pr-12 {
  padding-right: 3rem;
}
</style>
