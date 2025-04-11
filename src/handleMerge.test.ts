import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";
import { handleMerge } from "./handleMerge";

const formatArray = (array: string[]): string =>
  `[${array.map((value) => value || "_").join(", ")}]`;

const getElements = (values: string[]): { innerHTML: string }[] =>
  values.map((value) => ({ innerHTML: value }));

const testMerge = (inputValues: string[], expectedValues: string[]): void => {
  test(`${formatArray(inputValues)} should be merged as ${formatArray(expectedValues)}`, () => {
    const elements = getElements(inputValues);

    handleMerge(elements as HTMLDivElement[]);

    expect(elements.map((element) => element.innerHTML)).toEqual(
      expectedValues,
    );
  });
};

describe("handleMerge", () => {
  beforeAll(() => {
    vi.mock("./setScore.ts", () => ({
      setScore: vi.fn(),
    }));
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  testMerge(["", "", "", ""], ["", "", "", ""]);
  testMerge(["2", "", "", ""], ["2", "", "", ""]);
  testMerge(["2", "2", "", ""], ["4", "", "", ""]);
  testMerge(["4", "2", "", ""], ["4", "2", "", ""]);
  testMerge(["2", "2", "2", ""], ["4", "", "2", ""]);
  testMerge(["4", "2", "2", ""], ["4", "4", "", ""]);
  testMerge(["2", "4", "2", ""], ["2", "4", "2", ""]);
  testMerge(["2", "2", "4", ""], ["4", "", "4", ""]);
  testMerge(["2", "2", "2", "2"], ["4", "", "4", ""]);
  testMerge(["4", "2", "2", "2"], ["4", "4", "", "2"]);
  testMerge(["2", "4", "2", "2"], ["2", "4", "4", ""]);
  testMerge(["2", "2", "4", "2"], ["4", "", "4", "2"]);
  testMerge(["2", "2", "2", "4"], ["4", "", "2", "4"]);
  testMerge(["4", "4", "2", "2"], ["8", "", "4", ""]);
  testMerge(["4", "2", "4", "2"], ["4", "2", "4", "2"]);
  testMerge(["4", "2", "2", "4"], ["4", "4", "", "4"]);
});
