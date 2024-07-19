import { describe, it, expect } from "vitest";
import { initReplaceBeatsSeq, replaceBeatsSeq } from "./replaceBeatsSeq";
import { sequenceFixtures } from "../sequence.fixtures";

describe("replaceBeatsSeq", () => {
  it("replaces occupied beats according to the sequence", () => {
    let seq = sequenceFixtures.allBeatsA3();
    const sequence = [0, 4, 6, 2];
    let transformState = initReplaceBeatsSeq({
      _seq: seq,
      sequence: [...sequence],
      chromaPool: new Array(10).fill("C")
    });

    for (let i = 0; i < sequence.length; i++) {
      const { _seq, _transformState } = replaceBeatsSeq({
        _seq: seq,
        _transformState: transformState
      });

      expect(_seq[sequence[i]].note[0]).toEqual("C");
      expect(_transformState.visited).toEqual(sequence.slice(0, i + 1));

      seq = _seq;
      transformState = _transformState;
    }
  });

  it("doesn't replace unoccupied beats", () => {
    const seq = sequenceFixtures.allBeatsA3();
    seq[6] = undefined;
    seq[2] = undefined;
    let seqCopy = [...seq];
    const sequence = [0, 4, 6, 2];
    let transformState = initReplaceBeatsSeq({
      _seq: seq,
      sequence: [...sequence],
      chromaPool: new Array(10).fill("C")
    });

    for (let i = 0; i < sequence.length; i++) {
      const { _seq, _transformState } = replaceBeatsSeq({
        _seq: seqCopy,
        _transformState: transformState
      });

      if (seq[sequence[i]]) {
        expect(_seq[sequence[i]].note[0]).toEqual("C");
      } else {
        expect(_seq[sequence[i]]).toBeUndefined();
      }

      expect(_transformState.visited).toEqual(sequence.slice(0, i + 1));

      seqCopy = _seq;
      transformState = _transformState;
    }
  });
});
