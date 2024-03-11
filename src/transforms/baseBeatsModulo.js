import { getActiveBeats, getNoteAtIndex } from "../utils";
import { getModuloBeat } from "./transform-utils";
import {
  pickChromaFromNotePool,
  pickOctaveDirectional,
  pickPanRandom
} from "./pickers";

/**
 *
 * @description
 * activates or replaces a beat
 * shouldProceed is a composable function
 * uses a modulo to select the next beat to be replaced
 * ends if:
 *  - reencounters a visted beat
 *  - maxReps reached
 *  - maxBeats are activated / replaced
 */

export function initBaseBeatsModulo({ _seq, ...args }) {
  return {
    transform: "baseBeatsModulo",
    notePool: new Array(10).fill("A"),
    visited: [],
    cyclesUntilNextAction: 3,
    isAscending: true,
    isComplete: false,
    modulo: 14,
    maxBeats: 10,
    maxReps: 10,
    ...args
  };
}

export function revistedCheck({ _transformState, _seq }) {
  const nextBeat = getModuloBeat({
    _transformState,
    _seq
  });
  return _transformState.visited.includes(nextBeat);
}

export function maxBeatsCheck({ _transformState, _seq }) {
  return getActiveBeats(_seq).length >= _transformState.maxBeats;
}

export function maxRepsCheck({ _transformState }) {
  return _transformState.visited.length >= _transformState.maxReps;
}

export function defaultCheckComplete({ _transformState, _seq }) {
  return (
    revistedCheck({ _transformState, _seq }) ||
    maxBeatsCheck({ _transformState, _seq }) ||
    maxRepsCheck({ _transformState, _seq }) ||
    _transformState.notePool.length === 0
  );
}

export function baseBeatsModulo({
  _seq,
  _transformState,
  shouldProceed = () => true,
  checkComplete = defaultCheckComplete
}) {
  const _transformStateCopy = { ..._transformState };
  const _seqCopy = [..._seq];
  const beat = getModuloBeat({ _seq, _transformState });

  if (shouldProceed(_seqCopy[beat])) {
    const [chroma, notePool] = pickChromaFromNotePool(_transformState.notePool);
    _transformStateCopy.notePool = notePool;
    const [octave, isAscending] = pickOctaveDirectional({
      chroma,
      prevNote: getNoteAtIndex({
        _seq,
        index: _transformState.visited.at(-1)
      }),
      isAscending: _transformState.isAscending
    });
    _transformStateCopy.isAscending = isAscending;

    if (chroma && octave) {
      const note = chroma + octave;
      _seqCopy[beat] = {
        note,
        pan: pickPanRandom()
      };
    }
  }

  _transformStateCopy.visited.push(beat);

  _transformStateCopy.isComplete = checkComplete({
    _transformState: _transformStateCopy,
    _seq: _seqCopy
  });

  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}