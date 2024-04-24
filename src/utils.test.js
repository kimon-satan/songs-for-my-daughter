import { expect, it, describe } from "vitest";
import {
  choose,
  getChromaAtIndex,
  getFirstActiveBeat,
  getNearestActiveBeat,
  getOctaveAtIndex,
  calculateChromaDistance
} from "./utils";
import { sequenceFixtures } from "./sequence.fixtures";

describe("calculateChromaDistance", () => {
  it.each([
    ["A", "C", 3],
    ["C", "A", 3],
    ["A", "G", 2],
    ["A", "E", 5],
    ["E", "A", 5],
    ["A", "G#", 1],
    ["G", "G#", 1]
  ])(
    "correctly calculates the shortest distance between two chromas",
    (chromaA, chromaB, expectedVal) => {
      const d = calculateChromaDistance(chromaA, chromaB);
      expect(d).toEqual(expectedVal);
    }
  );
});

describe("choose", () => {
  it("returns one of the items in the array", () => {
    const a = ["a", "b", "c", "d"];
    const res = choose(a);
    expect(a.includes(res)).toBe(true);
  });
});

describe("getChromaAtIndex", () => {
  it("gets the chroma for an index", () => {
    const seq = sequenceFixtures.allBeatsChromatic();
    const chroma = getChromaAtIndex({ _seq: seq, index: 0 });
    expect(chroma).toEqual("A");
  });

  it("gets the chroma for a note with a #", () => {
    const seq = sequenceFixtures.allBeatsChromatic();
    const chroma = getChromaAtIndex({ _seq: seq, index: 1 });
    expect(chroma).toEqual("A#");
  });
});

describe("getOctaveAtIndex", () => {
  it("gets the octave for an index", () => {
    const seq = sequenceFixtures.allBeatsChromatic();
    const chroma = getOctaveAtIndex({ _seq: seq, index: 0 });
    expect(chroma).toEqual(2);
  });

  it("gets the octave for an index with a #", () => {
    const seq = sequenceFixtures.allBeatsChromatic();
    const chroma = getOctaveAtIndex({ _seq: seq, index: 1 });
    expect(chroma).toEqual(2);
  });
});

describe("getFirstActiveBeat", () => {
  it("gets the first active beat", () => {
    const seq = sequenceFixtures.aFewBeatsWithOffset();
    const idx = getFirstActiveBeat(seq);
    expect(idx).toEqual(2);
  });
});

describe("getNearestActiveBeat", () => {
  it.each([
    [0, 0],
    [1, 0],
    [2, 0],
    [9, 10],
    [11, 10],
    [14, 10],
    [15, 0],
    [17, 0],
    [19, 0]
  ])("gets the nearest active beat", (index, expected) => {
    const seq = sequenceFixtures.oneAndTen();
    const beat = getNearestActiveBeat({ _seq: seq, index });
    expect(beat).toEqual(expected);
  });
});
