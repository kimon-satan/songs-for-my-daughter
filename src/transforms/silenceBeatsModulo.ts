import { getActiveBeats } from "../utils";
import { getModuloBeat } from "./helpers/transform-utils";
import { Sequence, TransformState } from "../types";

interface SilenceBeatsModuloState extends TransformState {
  visited: number[];
  modulo: number;
  cyclesUntilNextAction: number;
  minBeats: number;
  maxReps: number;
  isComplete: boolean;
}

/**
 *
 * @description
 * silences a beat
 * uses a modulo to select the next beat to be activated
 * ends if:
 *  - reencounters a visted beat
 *  - maxReps reached
 *  - minBeats are activated in the sequence
 */

export function initSilenceBeatsModulo({
  _seq,
  ...args
}: {
  _seq: Sequence;
} & Partial<SilenceBeatsModuloState>): SilenceBeatsModuloState {
  return {
    transform: "silenceBeatsModulo",
    visited: [],
    modulo: 14,
    cyclesUntilNextAction: 3,
    minBeats: 3,
    maxReps: 10,
    isComplete: false,
    ...args
  };
}

export function silenceBeatsModulo({
  _transformState,
  _seq
}: {
  _transformState: SilenceBeatsModuloState;
  _seq: Sequence;
}): {
  _transformState: SilenceBeatsModuloState;
  _seq: Sequence;
} {
  const _transformStateCopy: SilenceBeatsModuloState = { ..._transformState };
  const _seqCopy: Sequence = [..._seq];

  const beat = getModuloBeat({ _seq, _transformState });
  _seqCopy[beat] = undefined;
  _transformStateCopy.visited.push(beat);

  const nextBeat = getModuloBeat({
    _transformState: _transformStateCopy,
    _seq
  });

  if (
    getActiveBeats(_seqCopy).length <= _transformState.minBeats ||
    _transformStateCopy.visited.length >= _transformState.maxReps ||
    _transformStateCopy.visited.includes(nextBeat)
  ) {
    _transformStateCopy.isComplete = true;
  }

  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}
