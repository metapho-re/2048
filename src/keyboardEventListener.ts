import { checkDefeat } from "./checkDefeat";
import { checkVictory } from "./checkVictory";
import { getGridSnapshot } from "./getGridSnapshot";
import { handleMove } from "./handleMove";
import { gridElement, statusElement } from "./queries";
import { refreshClasses } from "./refreshClasses";
import { setRandomPosition } from "./setRandomPosition";
import { Status } from "./types";

export const keyboardEventListener = (event: KeyboardEvent): void => {
  const isGameOver =
    statusElement.classList.contains(Status.Win) ||
    statusElement.classList.contains(Status.Lose);

  if (isGameOver === true) {
    return;
  }

  const hasGridChanged = (function () {
    switch (event.key) {
      case "ArrowUp": {
        return handleMove((index: number) => [
          ...document.querySelectorAll<HTMLDivElement>(`[x="${index}"]`),
        ]);
      }

      case "ArrowDown": {
        return handleMove((index: number) =>
          [
            ...document.querySelectorAll<HTMLDivElement>(`[x="${index}"]`),
          ].reverse()
        );
      }

      case "ArrowLeft": {
        return handleMove((index: number) => [
          ...document.querySelectorAll<HTMLDivElement>(`[y="${index}"]`),
        ]);
      }

      case "ArrowRight": {
        return handleMove((index: number) =>
          [
            ...document.querySelectorAll<HTMLDivElement>(`[y="${index}"]`),
          ].reverse()
        );
      }
    }
  })();

  if (hasGridChanged) {
    checkVictory(getGridSnapshot(gridElement));

    setRandomPosition();
    refreshClasses();

    checkDefeat(getGridSnapshot(gridElement));
  }
};
