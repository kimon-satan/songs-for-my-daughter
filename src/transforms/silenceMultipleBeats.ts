import { getActiveIndexes, choose } from "../utils";
import { Sequence, TransformState } from "../types";

interface SilenceMultipleBeatsState extends TransformState {
  cyclesUntilNextAction: number;
  isComplete: boolean;
  beats: number[];
}

export function initSilenceMultipleBeats({
  _seq,
  ...args
}: {
  _seq: Sequence;
} & Partial<SilenceMultipleBeatsState>): SilenceMultipleBeatsState {
  const active = getActiveIndexes({ _seq });
  const remaining = choose(active);
  const beats = active.filter((i) => i !== remaining);

  return {
    transform: "silenceMultipleBeats",
    cyclesUntilNextAction: 3,
    isComplete: false,
    beats, // this could be algorithmically determined
    ...args
  };
}

export function silenceMultipleBeats({
  _transformState,
  _seq
}: {
  _transformState: SilenceMultipleBeatsState;
  _seq: Sequence;
}): {
  _transformState: SilenceMultipleBeatsState;
  _seq: Sequence;
} {
  const _transformStateCopy: SilenceMultipleBeatsState = { ..._transformState };
  const _seqCopy: Sequence = [..._seq];
  _transformState.beats.forEach((beat) => {
    if (_seq[beat]) {
      _seqCopy[beat] = undefined;
    }
  });

  _transformStateCopy.isComplete = true;
  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}
