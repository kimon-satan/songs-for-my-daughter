import { getFirstAssignedBeat, getNoteAtIndex } from "./utils";
import {
  pickChromaFromNotePool,
  pickOctaveDirectional,
  pickPanRandom
} from "./pickers";

export const transforms = {
  fillSequence: {
    init: initFillSequence,
    transform: fillSequence
  },
  reduceSequence: {
    init: initReduceSequence,
    transform: reduceSequence
  }
};

export function initFillSequence({ _seq }) {
  return {
    transform: "fill-sequence",
    notePool: ["A", "A", "B", "C", "D", "E", "F", "G", "F#", "C#"],
    lastAdditionOnBeat: getFirstAssignedBeat(_seq) ?? 0,
    cyclesUntilNextAction: 3,
    isAscending: true,
    isComplete: false
  };
}

export function fillSequence({ _seq, _transformState }) {
  const _transformStateCopy = { ..._transformState };
  const _seqCopy = [..._seq];

  _transformStateCopy.isComplete = _transformState.notePool.length === 0;

  const beat = (_transformStateCopy.lastAdditionOnBeat + 14) % _seq.length;
  const [chroma, notePool] = pickChromaFromNotePool(_transformState.notePool);
  _transformStateCopy.notePool = notePool;
  const [octave, isAscending] = pickOctaveDirectional({
    chroma,
    prevNote: getNoteAtIndex({
      _seq,
      index: _transformState.lastAdditionOnBeat
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
  _transformStateCopy.lastAdditionOnBeat = beat;

  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}

//////////////////////////// Reduce sequence

export function initReduceSequence({ _seq }) {
  return {
    transform: "reduce-sequence",
    lastSubtractionOnBeat: getFirstAssignedBeat(_seq) ?? 0,
    cyclesUntilNextAction: 3,
    isComplete: false
  };
}

export function reduceSequence({ _transformState, _seq }) {
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
