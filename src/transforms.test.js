import { describe, expect, it } from "vitest";
import { activateBeatsModulo, initActivateBeatsModulo } from "./transforms";

describe("transforms", () => {
  describe("activateBeatsModulo", () => {
    it("it adds a note to an empty sequence", () => {
      const seq = new Array(20);
      const transformState = initActivateBeatsModulo({ _seq: seq });

      const { _seq, _transformState } = activateBeatsModulo({
        _seq: seq,
        _transformState: transformState
      });

      expect(_seq.filter((n) => n !== undefined)).toHaveLength(1);
      expect(seq.filter((n) => n !== undefined)).toHaveLength(0);
    });
  });
});
