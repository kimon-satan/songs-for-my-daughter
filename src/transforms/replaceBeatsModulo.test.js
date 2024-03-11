import { describe, expect, it } from "vitest";
import {
  replaceBeatsModulo,
  initReplaceBeatsModulo
} from "./replaceBeatsModulo";
import { sequenceFixtures } from "../sequence.fixtures";

describe("replaceBeatsModulo", () => {
  it("it doesn't add a note to an empty sequence", () => {
    const seq = new Array(20);
    const transformState = initReplaceBeatsModulo({ _seq: seq });

    const { _seq } = replaceBeatsModulo({
      _seq: seq,
      _transformState: transformState
    });

    expect(_seq.filter((n) => n !== undefined)).toHaveLength(0);
  });

  it("it replaces a note in a populated sequence", () => {
    let seq = sequenceFixtures.allBeatsA3();
    const chromaPool = new Array(20).fill("B");
    let transformState = initReplaceBeatsModulo({
      _seq: seq,
      modulo: 1,
      chromaPool
    });

    for (let i = 0; i < chromaPool.length; i++) {
      const { _seq, _transformState } = replaceBeatsModulo({
        _seq: seq,
        _transformState: transformState
      });
      seq = _seq;
      transformState = _transformState;
    }

    expect(seq.filter((n) => n.note !== "A3")).toHaveLength(20);
  });

  it("max beats does not affect completeness", () => {
    let seq = sequenceFixtures.allBeatsA3();
    const chromaPool = new Array(10).fill("B");
    let transformState = initReplaceBeatsModulo({
      _seq: seq,
      modulo: 1,
      chromaPool,
      maxBeats: 3
    });

    for (let i = 0; i < 5; i++) {
      const { _seq, _transformState } = replaceBeatsModulo({
        _seq: seq,
        _transformState: transformState
      });
      seq = _seq;
      transformState = _transformState;
    }

    expect(transformState.isComplete).toEqual(false);
  });
});
