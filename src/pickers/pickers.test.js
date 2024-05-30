import { describe, it, expect } from "vitest";
import { pickNearestValue } from "./pickers";

describe("pickNearestValue", () => {
  it.each([
    ["A", "A#"],
    ["B", "A#"],
    ["F", "E"],
    ["G", "G"]
  ])("finds the nearest value", (chroma, expectedVal) => {
    const notePool = ["A#", "E", "G"];
    const nearest = pickNearestValue(notePool, chroma);
    expect(nearest).toEqual(expectedVal);
  });
});
