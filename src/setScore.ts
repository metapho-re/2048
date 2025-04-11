import { scoreElement } from "./queries";

let score = 0;

export const setScore = (
  value: number | ((currentValue: number) => number),
): void => {
  if (typeof value === "number") {
    score = value;
  } else {
    score = value(score);
  }

  scoreElement.innerHTML = `Score: ${score}`;
};
