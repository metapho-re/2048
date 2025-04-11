import { SIDE } from "./constants";
import { getGridSnapshot } from "./getGridSnapshot";
import { handleMerge } from "./handleMerge";
import { handleShift } from "./handleShift";
import { gridElement } from "./queries";

export const handleMove = (
  getElements: (index: number) => HTMLDivElement[],
): boolean => {
  const initialGridSnapshot = getGridSnapshot(gridElement);

  for (let i = 0; i < SIDE; i++) {
    const elements = getElements(i);

    handleShift(elements);
    handleMerge(elements);
    handleShift(elements);
  }

  const finalGridSnapshot = getGridSnapshot(gridElement);

  return initialGridSnapshot.flat().join() !== finalGridSnapshot.flat().join();
};
