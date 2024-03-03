import * as Tone from "tone";

import {
  choose,
  deepChoose,
  getChromaAtIndex,
  getNearestActiveBeat,
  getOctaveFromNote
} from "../utils";

export function pickChromaFromNotePool(notePool, isDeep = true) {
  if (notePool.length === 0) {
    return [undefined, notePool];
  }
  const notePoolCopy = [...notePool];
  if (isDeep) {
    return [deepChoose(notePoolCopy), notePoolCopy];
  }
  return [choose(notePoolCopy), notePoolCopy];
}

export function pickChromaFromNearest({ _seq, index }) {
  const beat = getNearestActiveBeat({ _seq, index });
  return getChromaAtIndex({ _seq, index: beat });
}

export function pickOctaveDirectional({ chroma, prevNote, isAscending }) {
  if (!prevNote) {
    return [3, true];
  }

  let currOctave = getOctaveFromNote(prevNote);

  if (isAscending) {
    if (
      Tone.Frequency(chroma + currOctave).toMidi() <
      Tone.Frequency(prevNote).toMidi()
    ) {
      currOctave += 1;
    }
    return [Math.min(currOctave, 6), currOctave <= 6];
  } else {
    if (
      Tone.Frequency(chroma + currOctave).toMidi() >
      Tone.Frequency(prevNote).toMidi()
    ) {
      currOctave -= 1;
    }
    return [Math.max(currOctave, 2), currOctave <= 2];
  }
}

export function pickPanRandom(centroidBias = 1) {
  const pan = -1 + Math.pow(Math.random(), centroidBias) * 2;
  return pan;
}
