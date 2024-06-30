import { describe, it, expect } from "vitest";
import { pickNearestValue, pickNote } from "./pickers";
import { sequenceFixtures } from "../sequence.fixtures";

describe("pickNote", () => {
  it("selects ClosestMatchNeighbour", () => {
    const _seq = sequenceFixtures.firstBeatA3();
    const _transformState = {
      pickers: {
        chroma: "ClosestMatchNeighbour",
        octave: "Constant",
        pan: "Random"
      },
      octave: 4,
      chromaPool: ["B", "D", "F"]
    };
    const { note } = pickNote({ _seq, _transformState, currIndex: 5 });
    expect(note).toEqual("B4");
  });
});

describe("pickNearestValue", () => {
  it.each([
    ["A", "A#"],
    ["B", "A#"],
    ["F", "E"],
    ["G", "G"]
  ])("finds the nearest value", (chroma, expectedVal) => {
    const notePool = ["A#", "E", "G"];
    const nearest = pickNearestValue({ valuePool: notePool, chroma });
    expect(nearest).toEqual(expectedVal);
  });
});
