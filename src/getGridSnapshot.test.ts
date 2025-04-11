import { describe, expect, test } from "vitest";
import { SIDE } from "./constants";
import { getGridSnapshot } from "./getGridSnapshot";

interface MockElement {
  innerHTML: string;
  x: string;
  y: string;
  getAttribute: (name: string) => string;
}

const createElement = (x: number, y: number, value: number): MockElement => ({
  innerHTML: String(value),
  x: String(x),
  y: String(y),
  getAttribute: function (name: string) {
    if (name === "x") {
      return this.x;
    } else {
      return this.y;
    }
  },
});

const createGrid = (): { children: MockElement[] } => {
  const grid = {
    children: [] as MockElement[],
  };

  for (let y = 0; y < SIDE; y++) {
    for (let x = 0; x < SIDE; x++) {
      grid.children.push(createElement(x, y, (x + 1) * (y + 1)));
    }
  }

  return grid;
};

describe("getGridSnapshot", () => {
  test("snapshot accurately represent the grid state", () => {
    expect(getGridSnapshot(createGrid() as unknown as HTMLDivElement)).toEqual([
      ["1", "2", "3", "4"],
      ["2", "4", "6", "8"],
      ["3", "6", "9", "12"],
      ["4", "8", "12", "16"],
    ]);
  });
});
