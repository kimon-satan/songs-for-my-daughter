import { describe, expect, it } from "vitest";
import { baseMultipleBeats, initBaseMultipleBeats } from "./baseMultilpleBeats";
import { getChromaAtIndex, getChromaFromNote } from "../utils";
import { sequenceFixtures } from "../sequence.fixtures";

describe("baseMultipleBeats", () => {
  it("activates multiple beats", () => {
    const seq = new Array(5);
    seq[0] = { note: "A3" };
    const transformState = initBaseMultipleBeats({
      _seq: seq,
      beats: [1, 2, 3, 4]
    });
    const { _seq } = baseMultipleBeats({
      _seq: seq,
      _transformState: transformState
    });

    for (let i = 0; i < _seq.length; i++) {
      expect(getChromaAtIndex({ _seq, index: i })).toEqual("A");
    }
  });

  it("defaults to activating all beats", () => {
    const seq = sequenceFixtures.firstBeatA3();
    const transformState = initBaseMultipleBeats({
      _seq: seq
    });
    const { _seq } = baseMultipleBeats({
      _seq: seq,
      _transformState: transformState
    });

    for (let i = 0; i < _seq.length; i++) {
      expect(getChromaAtIndex({ _seq, index: i })).toEqual("A");
    }
  });

  it("activates no more than maxBeats", () => {
    const seq = sequenceFixtures.firstBeatA3();
    const transformState = initBaseMultipleBeats({
      _seq: seq,
      maxBeats: 5,
      chromaPool: ["B"]
    });
    const { _seq } = baseMultipleBeats({
      _seq: seq,
      _transformState: transformState
    });

    expect(_seq.filter((v) => getChromaFromNote(v?.note) === "B").length).toBe(
      5
    );
  });
});
