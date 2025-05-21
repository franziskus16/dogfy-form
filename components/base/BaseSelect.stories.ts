import BaseSelect from "./BaseSelect.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

const meta: Meta<typeof BaseSelect> = {
  title: "Base/BaseSelect",
  component: BaseSelect,
  argTypes: {
    modelValue: {
      control: "select",
      options: ["option1", "option2", "option3"],
    },
    disabled: { control: "boolean" },
    label: { control: "text" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof BaseSelect>;

export const Default: Story = {
  args: {
    modelValue: "",
    options: [
      { value: "option1", label: "Opción 1" },
      { value: "option2", label: "Opción 2" },
      { value: "option3", label: "Opción 3" },
    ],
    label: "Selecciona una opción",
    placeholder: "Elige...",
    disabled: false,
  },
};
