import { SIDE } from "./constants";
import { getGridSnapshot } from "./getGridSnapshot";
import { setStatus } from "./setStatus";
import { Status } from "./types";

export const isDefeat = (
  gridSnapshot: ReturnType<typeof getGridSnapshot>
): boolean => {
  for (let y = 0; y < SIDE - 1; y++) {
    for (let x = 0; x < SIDE - 1; x++) {
      if (
        gridSnapshot[y][x] === "" ||
        gridSnapshot[y][x] === gridSnapshot[y + 1][x] ||
        gridSnapshot[y][x] === gridSnapshot[y][x + 1]
      ) {
        return false;
      }
    }
  }

  for (let x = 0; x < SIDE - 1; x++) {
    if (
      gridSnapshot[SIDE - 1][x] === "" ||
      gridSnapshot[SIDE - 1][x] === gridSnapshot[SIDE - 1][x + 1]
    ) {
      return false;
    }
  }

  for (let y = 0; y < SIDE - 1; y++) {
    if (
      gridSnapshot[y][SIDE - 1] === "" ||
      gridSnapshot[y][SIDE - 1] === gridSnapshot[y + 1][SIDE - 1]
    ) {
      return false;
    }
  }

  if (gridSnapshot[SIDE - 1][SIDE - 1] === "") {
    return false;
  }

  return true;
};

export const checkDefeat = (
  gridSnapshot: ReturnType<typeof getGridSnapshot>
): void => {
  if (isDefeat(gridSnapshot)) {
    setStatus("You lost!", Status.Lose);
  }
};
