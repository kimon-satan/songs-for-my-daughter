import { describe, it, expect } from "vitest";
import {
  silenceMultipleBeats,
  initSilenceMultipleBeats
} from "./silenceMultipleBeats";
import { Note, Sequence } from "../types";

describe("silenceMultipleBeats", () => {
  it("should silence all beats except one", () => {
    const seq: Sequence = new Array(20).fill({ note: "A3", pan: 0 });

    const _transformState = initSilenceMultipleBeats({
      _seq: seq
    });

    const { _seq: newSeq } = silenceMultipleBeats({
      _transformState,
      _seq: seq
    });

    const activeNotes = newSeq.filter((n): n is Note => n !== undefined);
    expect(activeNotes).toHaveLength(1);
  });
});
