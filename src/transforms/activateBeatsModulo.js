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
 * activates a beat
 * only if unoccupied
 * uses a modulo to select the next beat to be activated
 * ends if:
 *  - reencounters a visted beat
 *  - maxReps reached
 *  - maxBeats are activated
 */

export function initActivateBeatsModulo({ _seq, ...args }) {
  return {
    transform: "activateBeatsModulo",
    notePool: ["A", "A", "B", "C", "D", "E", "F", "G", "F#", "C#"],
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

export function activateBeatsModulo({ _seq, _transformState }) {
  const _transformStateCopy = { ..._transformState };
  const _seqCopy = [..._seq];
  const beat = getModuloBeat({ _seq, _transformState });

  if (!_seqCopy[beat]) {
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

  const nextBeat = getModuloBeat({
    _transformState: _transformStateCopy,
    _seq
  });

  _transformStateCopy.isComplete =
    _transformStateCopy.notePool.length === 0 ||
    getActiveBeats(_seqCopy).length >= _transformState.maxBeats ||
    _transformStateCopy.visited.length >= _transformState.maxReps ||
    _transformStateCopy.visited.includes(nextBeat);

  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}
