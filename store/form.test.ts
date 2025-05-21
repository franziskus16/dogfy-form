import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useFormStore } from "./form";
import { Group } from "../domains/form/entities/Group";

describe("Form Store - A/B Group Assignment", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear();
  });

  it("assigns a random group if none is stored", () => {
    const store = useFormStore();
    store.init();

    expect([Group.A, Group.B]).toContain(store.group);
    expect(localStorage.getItem("form_group")).toBe(store.group);
  });

  it("uses the stored group if already present", () => {
    localStorage.setItem("form_group", Group.B);
    const store = useFormStore();
    store.init();

    expect(store.group).toBe(Group.B);
  });
});
