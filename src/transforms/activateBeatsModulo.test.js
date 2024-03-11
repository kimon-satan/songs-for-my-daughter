import { describe, expect, it } from "vitest";
import {
  activateBeatsModulo,
  initActivateBeatsModulo
} from "./activateBeatsModulo";
import { sequenceFixtures } from "../sequence.fixtures";

describe("activateBeatsModulo", () => {
  it("it adds a note to an empty sequence", () => {
    const seq = new Array(20);
    const transformState = initActivateBeatsModulo({ _seq: seq });

    const { _seq } = activateBeatsModulo({
      _seq: seq,
      _transformState: transformState
    });

    expect(_seq.filter((n) => n !== undefined)).toHaveLength(1);
    expect(seq.filter((n) => n !== undefined)).toHaveLength(0);
  });

  it("it doesn't replace a note in a populated sequence", () => {
    let seq = sequenceFixtures.allBeatsA3();
    const notePool = new Array(20).fill("B");
    const transformState = initActivateBeatsModulo({
      _seq: seq,
      modulo: 1,
      notePool
    });

    for (let i = 0; i < notePool.length; i++) {
      const { _seq } = activateBeatsModulo({
        _seq: seq,
        _transformState: transformState
      });
      seq = _seq;
    }

    expect(seq.filter((n) => n.note === "A3")).toHaveLength(20);
  });
});
