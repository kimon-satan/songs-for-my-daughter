import { describe, expect, it } from "vitest";
import { baseBeatsSeq, initBaseBeatsSeq } from "./baseBeatsSeq";
import { Sequence, TransformState } from "../types";

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

  it("should set all beats to A", () => {
    const seq: Sequence = new Array(20).fill({ note: "C3", pan: 0 });
    let transformState: TransformState = {
      transform: "baseBeatsSeq",
      isComplete: false,
      cyclesUntilNextAction: 1,
      pickers: {
        chroma: "random",
        octave: "random",
        pan: "random"
      },
      chromaPool: [],
      visited: [],
      isAscending: true,
      sequence: []
    };

    for (let i = 0; i < 20; i++) {
      const { _seq, _transformState } = baseBeatsSeq({
        _seq: seq,
        _transformState: transformState
      });
      seq[i] = _seq[i];
      transformState = _transformState;
    }

    expect(seq.filter((n) => n?.note?.charAt(0) === "A")).toHaveLength(20);
  });

  it("should set all beats to A (with sequence)", () => {
    const seq: Sequence = new Array(20).fill({ note: "C3", pan: 0 });
    let transformState: TransformState = {
      transform: "baseBeatsSeq",
      isComplete: false,
      cyclesUntilNextAction: 1,
      pickers: {
        chroma: "random",
        octave: "random",
        pan: "random"
      },
      chromaPool: [],
      visited: [],
      isAscending: true,
      sequence: []
    };

    for (let i = 0; i < 20; i++) {
      const { _seq, _transformState } = baseBeatsSeq({
        _seq: seq,
        _transformState: transformState
      });
      seq[i] = _seq[i];
      transformState = _transformState;
    }

    expect(seq.filter((n) => n?.note?.charAt(0) === "A")).toHaveLength(20);
  });
});
