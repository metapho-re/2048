import { SIDE } from "./constants";
import { gridElement } from "./queries";

export const generateGrid = (): void => {
  for (let y = 0; y < SIDE; y++) {
    for (let x = 0; x < SIDE; x++) {
      const element = document.createElement("div");

      element.setAttribute("x", String(x));
      element.setAttribute("y", String(y));
      element.innerHTML = "";

      gridElement.appendChild(element);
    }
  }
};
