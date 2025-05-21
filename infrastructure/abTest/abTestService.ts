export type ABGroup = "A" | "B";

export function getUserGroup(): ABGroup {
  const key = "dogfy_ab_group";
  let group = localStorage.getItem(key) as ABGroup | null;

  if (!group) {
    group = Math.random() > 0.5 ? "A" : "B";
    localStorage.setItem(key, group);
  }

  return group;
}
