import { expect, it, describe } from "vitest";
import { choose, getChromaAtIndex, getOctaveAtIndex } from "./utils";
import { sequenceFixtures } from "./sequence.fixtures";

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
