import BaseButton from "./BaseButton.vue";

export default {
  title: "Base/BaseButton",
  component: BaseButton,
  tags: ["autodocs"], // ← esto es necesario para que Docs funcione
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary"],
    },
    type: {
      control: "select",
      options: ["button", "submit"],
    },
  },
};

const Template = (args: any) => ({
  components: { BaseButton },
  setup() {
    return { args };
  },
  template: `<BaseButton v-bind="args">Click me</BaseButton>`,
});

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  type: "button",
};
