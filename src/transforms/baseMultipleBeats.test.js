import { describe, expect, it } from "vitest";
import { baseMultipleBeats, initBaseMultipleBeats } from "./baseMultilpleBeats";
import { getChromaAtIndex } from "../utils";

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
});
