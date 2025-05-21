import BaseInput from "./BaseInput.vue";

export default {
  title: "Base/BaseInput",
  component: BaseInput,
  argTypes: {
    label: { control: "text" },
    type: { control: "text" },
    modelValue: { control: "text" },
  },
};

const Template = (args: any) => ({
  components: { BaseInput },
  setup() {
    return { args };
  },
  template: '<BaseInput v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  label: "Nombre",
  modelValue: "Firulais",
  type: "text",
};
