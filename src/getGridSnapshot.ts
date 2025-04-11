import { SIDE } from "./constants";

export const getGridSnapshot = (gridElement: HTMLDivElement): string[][] => {
  const gridSnapshot: string[][] = [];

  for (let y = 0; y < SIDE; y++) {
    const row = [];

    for (let x = 0; x < SIDE; x++) {
      row.push("");
    }

    gridSnapshot.push(row);
  }

  [...gridElement.children].forEach((element) => {
    const x = Number(element.getAttribute("x"));
    const y = Number(element.getAttribute("y"));

    gridSnapshot[y][x] = element.innerHTML;
  });

  return gridSnapshot;
};
