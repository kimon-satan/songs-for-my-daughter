import { describe, it, expect } from "vitest";
import {
  initReplaceBeatsSeq,
  replaceBeatsSeq,
  ReplaceBeatsState
} from "./replaceBeatsSeq";
import { sequenceFixtures } from "../sequence.fixtures";
import { Sequence } from "../types";

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

  it("should replace all beats with C", () => {
    const seq: Sequence = new Array(20).fill({ note: "A3", pan: 0 });
    const sequence = Array.from({ length: 20 }, (_, i) => i);
    const transformState: ReplaceBeatsState = {
      transform: "replaceBeatsSeq",
      isComplete: false,
      cyclesUntilNextAction: 1,
      chromaPool: ["C"]
    };

    for (const i of sequence) {
      const { _seq } = replaceBeatsSeq({
        _seq: seq,
        _transformState: transformState
      });
      if (_seq[i] && _seq[i].note) {
        seq[i] = _seq[i];
        expect(_seq[i].note[0]).toEqual("C");
      }
    }
  });

  it("should replace all beats with C (with sequence)", () => {
    const seq: Sequence = new Array(20).fill({ note: "A3", pan: 0 });
    const sequence = Array.from({ length: 20 }, (_, i) => i);
    const transformState: ReplaceBeatsState = {
      transform: "replaceBeatsSeq",
      isComplete: false,
      cyclesUntilNextAction: 1,
      chromaPool: ["C"]
    };

    for (const i of sequence) {
      const { _seq } = replaceBeatsSeq({
        _seq: seq,
        _transformState: transformState
      });
      if (_seq[i] && _seq[i].note) {
        seq[i] = _seq[i];
        expect(_seq[i].note[0]).toEqual("C");
      }
    }
  });
});
