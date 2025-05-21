import { describe, it, expect, vi, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import SummaryStep from "../../components/formSteps/SummaryStep.vue";
import { createPinia, setActivePinia } from "pinia";
import { Group } from "../../domains/form/entities/Group";
import { useFormStore } from "../../store/form";

describe("SummaryStep.vue", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("muestra correctamente los datos", () => {
    const form = useFormStore();
    form.data = {
      breed: "Labrador",
      petName: "Firulais",
      petAge: 3,
      petWeight: 12,
      dietGoal: "Perder peso",
      foodPreferences: ["gloton"],
      activityLevel: "Alta",
    };
    form.group = Group.A;

    const wrapper = mount(SummaryStep);

    expect(wrapper.text()).toContain("Resumen de los datos de Firulais");
    expect(wrapper.text()).toContain("Nombre de la mascota: Firulais");
    expect(wrapper.text()).toContain("Perder peso");
    expect(wrapper.text()).toContain("gloton");
    expect(wrapper.text()).toContain("Grupo: A");
  });

  it("llama a completeForm y muestra alerta al enviar", async () => {
    const form = useFormStore();
    form.completeForm = vi.fn();

    const wrapper = mount(SummaryStep);
    window.alert = vi.fn();

    await wrapper.find("button").trigger("click");

    expect(form.completeForm).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("Formulario enviado con éxito!");
  });
});
