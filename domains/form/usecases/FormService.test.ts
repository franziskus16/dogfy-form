// tests/domains/usecases/FormService.test.ts

import { describe, it, expect } from "vitest";
import { FormStep } from "../entities/FormStep";
import { Group } from "../entities/Group";
import { FormService } from "../usecases/FormService";

describe("FormService", () => {
  it("should return the correct next step for Group A", () => {
    const next = FormService.getNextStep(FormStep.Breed, Group.A);
    expect(next).toBe(FormStep.PetName);
  });

  it("should skip Activity step for Group B", () => {
    const steps = FormService.getStepList(Group.B);
    expect(steps).not.toContain(FormStep.Activity);
  });

  it("should include Activity step for Group A", () => {
    const steps = FormService.getStepList(Group.A);
    expect(steps).toContain(FormStep.Activity);
  });

  it("should return null if there is no next step", () => {
    const lastStep = FormService.getStepList(Group.A).at(-1)!;
    const next = FormService.getNextStep(lastStep, Group.A);
    expect(next).toBe(null);
  });

  it("should return null if there is no previous step", () => {
    const firstStep = FormService.getStepList(Group.B)[0];
    const prev = FormService.getPreviousStep(firstStep, Group.B);
    expect(prev).toBe(null);
  });
});
