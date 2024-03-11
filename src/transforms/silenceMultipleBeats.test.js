import { describe, expect, it } from "vitest";
import {
  initSilenceMultipleBeats,
  silenceMultipleBeats
} from "./silenceMultipleBeats";

describe("SilenceMultipleBeats", () => {
  it("silences multiple beats", () => {
    const seq = [undefined, 1, undefined, 1, undefined, 1, undefined, 1];
    const transformState = initSilenceMultipleBeats({
      _seq: seq,
      beats: [1, 3, 5, 7]
    });

    const { _seq } = silenceMultipleBeats({
      _transformState: transformState,
      _seq: seq
    });

    expect(_seq.filter((v) => !!v)).toHaveLength(0);
  });
});
