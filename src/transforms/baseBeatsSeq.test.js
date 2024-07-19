import { describe, expect, it } from "vitest";
import { baseBeatsSeq, initBaseBeatsSeq } from "./baseBeatsSeq";

describe("baseBeatsSeq", () => {
  it("adds notes in order of the sequence", () => {
    let seq = new Array(20);
    const sequence = [0, 4, 6, 2];
    let transformState = initBaseBeatsSeq({
      _seq: seq,
      sequence: [...sequence]
    });

    for (let i = 0; i < sequence.length; i++) {
      const { _seq, _transformState } = baseBeatsSeq({
        _seq: seq,
        _transformState: transformState
      });

      expect(_seq[sequence[i]]).toBeDefined();
      expect(_transformState.visited).toEqual(sequence.slice(0, i + 1));

      seq = _seq;
      transformState = _transformState;
    }
  });

  it("completes when the sequence has been completed", () => {
    let seq = new Array(20);
    const sequence = [0, 4, 6, 2];
    let transformState = initBaseBeatsSeq({
      _seq: seq,
      sequence: [...sequence]
    });

    for (let i = 0; i < sequence.length; i++) {
      expect(transformState.isComplete).toBeFalsy();
      const { _seq, _transformState } = baseBeatsSeq({
        _seq: seq,
        _transformState: transformState
      });

      seq = _seq;
      transformState = _transformState;
    }

    expect(transformState.isComplete).toBe(true);
  });
});
