import { describe, expect, it } from "vitest";

import { sequenceFixtures } from "../sequence.fixtures";
import { initActivateMultipleBeats } from "./activateMultipleBeats";
import { getNonActiveIndexes } from "../utils";

describe("activateMultipleBeats", () => {
  it("activates the empty beats", () => {
    const seq = sequenceFixtures.oneAndTen();
    const transformState = initActivateMultipleBeats({ _seq: seq });
    const nonActive = getNonActiveIndexes({ _seq: seq });
    expect(transformState.beats).toEqual(nonActive);
  });

  it("activates no more than maxBeats", () => {
    const seq = sequenceFixtures.firstBeatA3();
    const transformState = initActivateMultipleBeats({
      _seq: seq,
      maxBeats: 5
    });

    expect(transformState.beats).toHaveLength(5);
  });
});
