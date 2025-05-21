<!-- components/base/BaseSelect.vue -->
<script setup lang="ts">
const props = defineProps<{
  modelValue: string | number | null;
  options: Array<{ value: string | number; label: string }>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

function onChange(event: Event) {
  const target = event.target as HTMLSelectElement;
  emit("update:modelValue", target.value);
}
</script>

<template>
  <div class="w-full">
    <label v-if="label" class="block mb-1 font-medium text-gray-700">
      {{ label }}
    </label>

    <div class="relative">
      <select
        class="w-full border px-3 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
        :value="modelValue"
        @change="onChange"
        :disabled="disabled"
      >
        <option disabled value="">
          {{ placeholder || "Selecciona una opción" }}
        </option>
        <option v-for="opt in options" :key="opt.value" :value="opt.value">
          {{ opt.label }}
        </option>
      </select>
    </div>
  </div>
</template>
