import { setScore } from "./setScore";

const canBeMerged = (
  elementA: HTMLDivElement,
  elementB: HTMLDivElement,
): boolean =>
  elementA.innerHTML !== "" && elementA.innerHTML === elementB.innerHTML;

const merge = (elementA: HTMLDivElement, elementB: HTMLDivElement): void => {
  elementA.innerHTML = String(
    Number(elementA.innerHTML) + Number(elementB.innerHTML),
  );
  elementB.innerHTML = "";

  setScore((currentScore) => currentScore + Number(elementA.innerHTML));

  elementA.classList.add("tile-merged");

  setTimeout(() => {
    elementA.classList.remove("tile-merged");
  }, 150);
};

export const handleMerge = (elements: HTMLDivElement[]): void => {
  if (canBeMerged(elements[0], elements[1])) {
    merge(elements[0], elements[1]);
  }

  if (canBeMerged(elements[1], elements[2])) {
    merge(elements[1], elements[2]);
  }

  if (canBeMerged(elements[2], elements[3])) {
    merge(elements[2], elements[3]);
  }
};
