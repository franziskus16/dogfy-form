export type FormStep =
  | "petName"
  | "petAge"
  | "petWeight"
  | "dietGoal"
  | "foodPreferences"
  | "activityLevel"
  | "summary";

export interface FormData {
  petName: string;
  petAge: number;
  petWeight: number;
  dietGoal: string;
  foodPreferences: string[];
  activityLevel?: string;
}
