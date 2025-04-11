import { getGridSnapshot } from "./getGridSnapshot";
import { setStatus } from "./setStatus";
import { Status } from "./types";

const TARGET_VALUE = "2048";

export const isVictory = (
  gridSnapshot: ReturnType<typeof getGridSnapshot>
): boolean => gridSnapshot.flat().indexOf(TARGET_VALUE) > -1;

export const checkVictory = (
  gridSnapshot: ReturnType<typeof getGridSnapshot>
): void => {
  if (isVictory(gridSnapshot)) {
    setStatus("You won!", Status.Win);
  }
};
