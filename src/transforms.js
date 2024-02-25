import { getActiveBeats, getFirstActiveBeat, getNoteAtIndex } from "./utils";
import {
  pickChromaFromNotePool,
  pickOctaveDirectional,
  pickPanRandom
} from "./pickers";

export const transforms = {
  activateBeatsModulo: {
    init: initActivateBeatsModulo,
    transform: activateBeatsModulo
  },
  silenceBeatsModulo: {
    init: initSilenceBeatsModulo,
    transform: silenceBeatsModulo
  }
};

export function initActivateBeatsModulo({ _seq, ...args }) {
  return {
    transform: "fill-sequence",
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

function getModuloBeat({ _transformState, _seq }) {
  const ref =
    _transformState.visited.length === 0
      ? getFirstActiveBeat(_seq) || 0
      : _transformState.visited.at(-1);

  return (ref + _transformState.modulo) % _seq.length;
}

export function activateBeatsModulo({ _seq, _transformState }) {
  const _transformStateCopy = { ..._transformState };
  const _seqCopy = [..._seq];
  const beat = getModuloBeat({ _seq, _transformState });

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

  _transformStateCopy.visited.push(beat);

  const nextBeat = getModuloBeat({
    _transformState: _transformStateCopy,
    _seq
  });

  _transformStateCopy.isComplete =
    _transformState.notePool.length === 0 ||
    getActiveBeats(_seqCopy).length >= _transformState.maxBeats ||
    _transformState.visited.length >= _transformState.maxReps ||
    _transformState.visited.includes(nextBeat);

  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}

//////////////////////////// Silence Beats Modulo ////////////////////////////

export function initSilenceBeatsModulo({ _seq, ...args }) {
  return {
    transform: "reduce-sequence",
    lastSubtractionOnBeat: getFirstActiveBeat(_seq) ?? 0,
    cyclesUntilNextAction: 3,
    isComplete: false,
    ...args
  };
}

export function silenceBeatsModulo({ _transformState, _seq }) {
  let _transformStateCopy = { ..._transformState };
  let _seqCopy = [..._seq];

  const notesRemaining = _seq.reduce((prev, curr) => prev + (curr ? 1 : 0), 0);

  const beat = (_transformStateCopy.lastSubtractionOnBeat + 14) % _seq.length;
  _seqCopy[beat] = undefined;
  _transformStateCopy.lastSubtractionOnBeat = beat;

  if (notesRemaining === 3) {
    _transformStateCopy.isComplete = true;
  }

  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}
