import { describe, expect, it } from "vitest";
import { baseBeatsModulo, initBaseBeatsModulo } from "./baseBeatsModulo";
import { getActiveBeats } from "../utils";
import { sequenceFixtures } from "../sequence.fixtures";

describe("baseBeatsModulo", () => {
  it("it adds a note to an empty sequence", () => {
    const seq = new Array(20);
    const transformState = initBaseBeatsModulo({ _seq: seq });

    const { _seq } = baseBeatsModulo({
      _seq: seq,
      _transformState: transformState
    });

    expect(_seq.filter((n) => n !== undefined)).toHaveLength(1);
    expect(seq.filter((n) => n !== undefined)).toHaveLength(0);
  });

  it("it replaces a note in a populated sequence", () => {
    let seq = sequenceFixtures.allBeatsChromatic();
    const notePool = new Array(20).fill("A");
    const transformState = initBaseBeatsModulo({
      _seq: seq,
      modulo: 1,
      notePool
    });

    for (let i = 0; i < notePool.length; i++) {
      const { _seq } = baseBeatsModulo({
        _seq: seq,
        _transformState: transformState
      });
      seq = _seq;
    }
    expect(seq.filter((n) => n.note.charAt(0) === "A")).toHaveLength(20);
  });

  it("it doesn't add more than max beats", () => {
    let seq = new Array(20);
    let transformState = initBaseBeatsModulo({ _seq: seq });
    transformState.maxBeats = 5;

    for (let i = 0; i < transformState.maxBeats; i++) {
      const { _seq, _transformState } = baseBeatsModulo({
        _seq: seq,
        _transformState: transformState
      });
      transformState = _transformState;
      seq = _seq;
      expect(getActiveBeats(seq)).toHaveLength(i + 1);
      expect(transformState.isComplete).toEqual(
        i === transformState.maxBeats - 1
      );
    }
  });

  it("it completes if a note is due to be revisted the next cycle", () => {
    let seq = new Array(20);
    let transformState = initBaseBeatsModulo({ _seq: seq });
    transformState.modulo = 10;

    for (let i = 0; i < 2; i++) {
      const { _seq, _transformState } = baseBeatsModulo({
        _seq: seq,
        _transformState: transformState
      });
      transformState = _transformState;
      seq = _seq;
      expect(getActiveBeats(seq)).toHaveLength(i + 1);
      expect(transformState.isComplete).toEqual(i === 1);
    }
  });

  it("it doesn't exceed max reps", () => {
    let seq = new Array(20);
    let transformState = initBaseBeatsModulo({ _seq: seq });
    transformState.maxReps = 5;

    for (let i = 0; i < transformState.maxReps; i++) {
      const { _seq, _transformState } = baseBeatsModulo({
        _seq: seq,
        _transformState: transformState
      });
      transformState = _transformState;
      seq = _seq;
      expect(getActiveBeats(seq)).toHaveLength(i + 1);
      expect(transformState.isComplete).toEqual(
        i === transformState.maxReps - 1
      );
    }
  });
});
