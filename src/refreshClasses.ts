import { COLOR_CLASSES } from "./constants";
import { getClass } from "./getClass";
import { gridElement } from "./queries";

export const refreshClasses = (): void => {
  [...gridElement.children].forEach((element) => {
    const value = element.innerHTML;

    element.classList.forEach((className) => {
      if (COLOR_CLASSES.includes(className)) {
        element.classList.remove(className);
      }
    });

    if (value !== "") {
      element.classList.add(getClass(Number(value)));
    }
  });
};
