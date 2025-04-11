import { getClass } from "./getClass";
import { gridElement } from "./queries";

export const refreshClasses = (): void => {
  [...gridElement.children].forEach((element) => {
    const className = element.classList.item(0);
    const value = element.innerHTML;

    if (className !== null) {
      element.classList.remove(className);
    }

    if (value !== "") {
      element.classList.add(getClass(Number(value)));
    }
  });
};
