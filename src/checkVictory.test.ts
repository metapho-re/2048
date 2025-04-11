import { afterAll, beforeAll, describe, expect, test, vi } from "vitest";
import { isVictory } from "./checkVictory";

describe("isVictory", () => {
  beforeAll(() => {
    vi.mock("./queries.ts", () => ({}));
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  test("game is not won when 2048 is not in the grid", () => {
    expect(
      isVictory([
        ["2", "", "4", ""],
        ["", "64", "", "256"],
        ["2", "", "4", ""],
        ["512", "", "1024", ""],
      ])
    ).toBe(false);
  });

  test("game is won when 2048 is in the grid", () => {
    expect(
      isVictory([
        ["2", "", "4", ""],
        ["", "64", "", "256"],
        ["2", "", "4", ""],
        ["512", "", "1024", "2048"],
      ])
    ).toBe(true);
  });
});
