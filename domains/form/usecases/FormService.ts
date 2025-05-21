import { FormStep } from "../entities/FormStep";
import { Group } from "../entities/Group";

export class FormService {
  static getNextStep(current: FormStep, group: Group): FormStep | null {
    const steps = FormService.getStepList(group);
    const index = steps.indexOf(current);
    return index >= 0 && index < steps.length - 1 ? steps[index + 1] : null;
  }

  static getPreviousStep(current: FormStep, group: Group): FormStep | null {
    const steps = FormService.getStepList(group);
    const index = steps.indexOf(current);
    return index > 0 ? steps[index - 1] : null;
  }

  static getStepList(group: Group): FormStep[] {
    const allSteps = [
      FormStep.Breed,
      FormStep.PetName,
      FormStep.PetAge,
      FormStep.Weight,
      FormStep.DietGoal,
      FormStep.Activity,
      FormStep.FoodPreferences,
      FormStep.Summary,
    ];

    if (group === Group.B) {
      return allSteps.filter((step) => step !== FormStep.Activity);
    }

    return allSteps;
  }
}
