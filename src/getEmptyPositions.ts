import { gridElement } from "./queries";

interface Position {
  x: number;
  y: number;
}

export const getEmptyPositions = (): Position[] => {
  const emptyPositions: Position[] = [];

  [...gridElement.children].forEach((element) => {
    if (element.innerHTML === "") {
      emptyPositions.push({
        x: Number(element.getAttribute("x")),
        y: Number(element.getAttribute("y")),
      });
    }
  });

  return emptyPositions;
};
