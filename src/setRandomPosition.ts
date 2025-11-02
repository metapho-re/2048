import { getEmptyPositions } from "./getEmptyPositions";
import { getRandomValue } from "./getRandomValue";

export const setRandomPosition = (): void => {
  const emptyPositions = getEmptyPositions();

  if (emptyPositions.length === 0) {
    return;
  }

  const { x, y } =
    emptyPositions[Math.floor(Math.random() * emptyPositions.length)];

  const elementAtRandomPosition = document.querySelector(
    `[x="${x}"][y="${y}"]`,
  ) as HTMLDivElement;

  elementAtRandomPosition.innerHTML = getRandomValue();

  elementAtRandomPosition.classList.add("tile-created");

  setTimeout(() => {
    elementAtRandomPosition.classList.remove("tile-created");
  }, 150);
};
