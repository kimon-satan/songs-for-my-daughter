import { describe, expect, it } from "vitest";
import {
  activateBeatsModulo,
  initActivateBeatsModulo,
  silenceBeatsModulo,
  initSilenceBeatsModulo
} from "./transforms";
import { getActiveBeats } from "./utils";
import { sequenceFixtures } from "./sequence.fixtures";

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

    it("it doesn't add more than max beats", () => {
      let seq = new Array(20);
      let transformState = initActivateBeatsModulo({ _seq: seq });
      transformState.maxBeats = 5;

      for (let i = 0; i < transformState.maxBeats; i++) {
        const { _seq, _transformState } = activateBeatsModulo({
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
      let transformState = initActivateBeatsModulo({ _seq: seq });
      transformState.modulo = 10;

      for (let i = 0; i < 2; i++) {
        const { _seq, _transformState } = activateBeatsModulo({
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
      let transformState = initActivateBeatsModulo({ _seq: seq });
      transformState.maxReps = 5;

      for (let i = 0; i < transformState.maxReps; i++) {
        const { _seq, _transformState } = activateBeatsModulo({
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

  describe("silenceBeatsModulo", () => {
    it("removes a note from a sequence", () => {
      const seq = sequenceFixtures.allBeatsChromatic();
      const transformState = initSilenceBeatsModulo({ _seq: seq });

      const { _seq, _transformState } = silenceBeatsModulo({
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

      for (
        let i = getActiveBeats(seq).length;
        i > transformState.minBeats;
        i--
      ) {
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
});
