import * as Tone from "tone";

import { deepChoose, getOctaveFromNote } from "../utils";

export function pickChromaFromNotePool(notePool) {
  if (notePool.length === 0) {
    return [undefined, notePool];
  }
  const notePoolCopy = [...notePool];
  return [deepChoose(notePoolCopy), notePoolCopy];
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
