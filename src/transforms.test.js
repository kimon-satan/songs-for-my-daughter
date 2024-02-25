import { describe, expect, it } from "vitest";
import { fillSequence, initFillSequence } from "./transforms";

describe("transforms", () => {
  describe("fillSequence", () => {
    it("it adds a note to an empty sequence", () => {
      const seq = new Array(20);
      const transformState = initFillSequence();

      const { _seq, _transformState } = fillSequence({
        _seq: seq,
        _transformState: transformState
      });

      expect(_seq.filter((n) => n !== undefined)).toHaveLength(1);
      expect(seq.filter((n) => n !== undefined)).toHaveLength(0);
    });
  });
});
