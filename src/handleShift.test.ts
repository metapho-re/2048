import { describe, expect, test } from "vitest";
import { handleShift } from "./handleShift";

const formatArray = (array: string[]): string =>
  `[${array.map((value) => value || "_").join(", ")}]`;

const getElements = (values: string[]): { innerHTML: string }[] =>
  values.map((value) => ({ innerHTML: value }));

const testShift = (inputValues: string[], expectedValues: string[]): void => {
  test(`${formatArray(inputValues)} should be shifted as ${formatArray(expectedValues)}`, () => {
    const elements = getElements(inputValues);

    handleShift(elements as HTMLDivElement[]);

    expect(elements.map((element) => element.innerHTML)).toEqual(
      expectedValues,
    );
  });
};

describe("handleShift", () => {
  testShift(["", "", "", ""], ["", "", "", ""]);
  testShift(["2", "", "", ""], ["2", "", "", ""]);
  testShift(["", "2", "", ""], ["2", "", "", ""]);
  testShift(["", "", "2", ""], ["2", "", "", ""]);
  testShift(["", "", "", "2"], ["2", "", "", ""]);
  testShift(["2", "4", "", ""], ["2", "4", "", ""]);
  testShift(["2", "", "4", ""], ["2", "4", "", ""]);
  testShift(["2", "", "", "4"], ["2", "4", "", ""]);
  testShift(["", "2", "4", ""], ["2", "4", "", ""]);
  testShift(["", "2", "", "4"], ["2", "4", "", ""]);
  testShift(["", "", "2", "4"], ["2", "4", "", ""]);
  testShift(["2", "4", "8", ""], ["2", "4", "8", ""]);
  testShift(["2", "4", "", "8"], ["2", "4", "8", ""]);
  testShift(["2", "", "4", "8"], ["2", "4", "8", ""]);
  testShift(["", "2", "4", "8"], ["2", "4", "8", ""]);
  testShift(["2", "4", "8", "16"], ["2", "4", "8", "16"]);
});
