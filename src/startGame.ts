import { gridElement } from "./queries";
import { refreshClasses } from "./refreshClasses";
import { setRandomPosition } from "./setRandomPosition";
import { setScore } from "./setScore";
import { setStatus } from "./setStatus";
import { Status } from "./types";

export const startGame = (): void => {
  [...gridElement.children].forEach((element) => {
    element.innerHTML = "";
  });

  setScore(0);
  setStatus("", Status.Clear);

  setRandomPosition();
  setRandomPosition();

  refreshClasses();
};
