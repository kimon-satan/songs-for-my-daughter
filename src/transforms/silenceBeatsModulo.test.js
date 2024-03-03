import { describe, expect, it } from "vitest";
import { silenceBeatsModulo, initSilenceBeatsModulo } from "./transforms";
import { getActiveBeats } from "../utils";
import { sequenceFixtures } from "../sequence.fixtures";

describe("silenceBeatsModulo", () => {
  it("removes a note from a sequence", () => {
    const seq = sequenceFixtures.allBeatsChromatic();
    const transformState = initSilenceBeatsModulo({ _seq: seq });

    const { _seq } = silenceBeatsModulo({
      _seq: seq,
      _transformState: transformState
    });

    expect(getActiveBeats(_seq)).toHaveLength(getActiveBeats(seq).length - 1);
  });
  it("it completes when the sequence reaches minBeats", () => {
    let seq = sequenceFixtures.allBeatsChromatic();
    let transformState = initSilenceBeatsModulo({ _seq: seq });
    transformState.minBeats = 5;
    transformState.maxReps = 100;
    transformState.modulo = 1;

    for (let i = getActiveBeats(seq).length; i > transformState.minBeats; i--) {
      const { _seq, _transformState } = silenceBeatsModulo({
        _seq: seq,
        _transformState: transformState
      });
      transformState = _transformState;
      seq = _seq;
      expect(getActiveBeats(seq)).toHaveLength(i - 1);
      expect(transformState.isComplete).toEqual(
        i - 1 === transformState.minBeats
      );
    }
  });

  it("it doesn't exceed maxReps", () => {
    let seq = sequenceFixtures.allBeatsChromatic();
    let transformState = initSilenceBeatsModulo({ _seq: seq });
    transformState.minBeats = 1;
    transformState.maxReps = 10;
    transformState.modulo = 1;

    for (let i = 0; i < transformState.maxReps; i++) {
      const { _seq, _transformState } = silenceBeatsModulo({
        _seq: seq,
        _transformState: transformState
      });
      transformState = _transformState;
      seq = _seq;

      expect(transformState.isComplete).toEqual(
        i + 1 === transformState.maxReps
      );
    }
  });
});
