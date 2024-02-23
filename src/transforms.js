import * as Tone from "tone";
import { deepChoose, choose } from "./utils";

//////////////////////////////// Transforms /////////////////////////////

export function initFillSequence() {
  return {
    transform: "fill-sequence",
    notePool: ["A", "A", "B", "C", "D", "E", "F", "G", "F#", "C#"],
    lastAdditionOnBeat: 0,
    cyclesUntilNextAction: 3,
    isAscending: true,
    isComplete: false
  };
}

export function fillSequence({ _seq, _transformState }) {
  const _transformStateCopy = { ..._transformState };
  const _seqCopy = [..._seq];

  _transformStateCopy.isComplete = _transformState.notePool.length === 0;

  if (_transformStateCopy.cyclesUntilNextAction === 0) {
    const beat = (_transformStateCopy.lastAdditionOnBeat + 14) % _seq.length;
    const [chroma, notePool] = getNextChroma(_transformStateCopy);
    _transformStateCopy.notePool = notePool;
    const [octave, isAscending] = getNextOctave({
      chroma,
      _transformState: _transformStateCopy,
      _seq: _seqCopy
    });
    _transformStateCopy.isAscending = isAscending;

    if (chroma && octave) {
      const note = chroma + octave;
      _seqCopy[beat] = {
        note,
        pan: getNextPan()
      };
    }
    _transformStateCopy.lastAdditionOnBeat = beat;
    _transformStateCopy.cyclesUntilNextAction = choose([1]);
  } else {
    _transformStateCopy.cyclesUntilNextAction -= 1;
  }

  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}

/////////////////// fill sequence helpers /////////////////////

function getNextChroma(_currentTransformState) {
  const { notePool } = _currentTransformState;
  if (notePool.length === 0) {
    return undefined;
  }
  const notePoolCopy = [...notePool];
  return [deepChoose(notePoolCopy), notePoolCopy];
}

function getNextOctave({ chroma, _transformState, _seq }) {
  const { lastAdditionOnBeat, isAscending } = _transformState;
  const prevNote = _seq[lastAdditionOnBeat].note;

  if (!prevNote) {
    return 3;
  }

  let currOctave = Number(prevNote.substring(prevNote.length - 1));

  if (isAscending) {
    if (
      Tone.Frequency(chroma + currOctave).toMidi() <
      Tone.Frequency(prevNote).toMidi()
    ) {
      currOctave += 1;
    }
    return [Math.min(currOctave, 6), currOctave < 6];
  } else {
    if (
      Tone.Frequency(chroma + currOctave).toMidi() >
      Tone.Frequency(prevNote).toMidi()
    ) {
      currOctave -= 1;
    }
    return [Math.max(currOctave, 3), currOctave > 3];
  }
}

function getNextPan(_currentTransformState, centroidBias = 1) {
  const pan = -1 + Math.pow(Math.random(), centroidBias) * 2;
  return pan;
}

//////////////////////////// Reduce sequence

export function initReduceSequence() {
  return {
    transform: "reduce-sequence",
    lastSubtractionOnBeat: 0,
    cyclesUntilNextAction: 3,
    isComplete: false
  };
}

export function reduceSequence({ _transformState, _seq }) {
  let _transformStateCopy = { ..._transformState };
  let _seqCopy = [..._seq];

  const notesRemaining = _seq.reduce((prev, curr) => prev + (curr ? 1 : 0), 0);

  if (notesRemaining === 3) {
    _transformStateCopy.isComplete = true;
  }

  if (_transformStateCopy.cyclesUntilNextAction === 0) {
    const beat = (_transformStateCopy.lastSubtractionOnBeat + 14) % _seq.length;
    _seqCopy[beat] = undefined;
    _transformStateCopy.lastSubtractionOnBeat = beat;
    _transformStateCopy.cyclesUntilNextAction = choose([1, 2, 3]);
  } else {
    _transformStateCopy.cyclesUntilNextAction -= 1;
  }

  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}
