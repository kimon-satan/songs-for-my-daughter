import * as Tone from "tone";

import {
  choose,
  deepChoose,
  getChromaAtIndex,
  getNoteAtIndex,
  getNearestActiveBeat,
  getOctaveFromNote,
  getOctaveAtIndex
} from "../utils";

export const CHROMA_PICKERS = [
  "ChromaPoolShallow",
  "ChromaPoolDeep",
  "CopyNeighbour",
  "ChromaPoolClosestMatch"
];

export const OCTAVE_PICKERS = [
  "AscendDescend",
  "PreserveOctave",
  "OctavePoolShallow",
  "OctavePoolDeep",
  "CopyNeighbour"
];

export const PAN_PICKERS = ["Random", "PreservePan"];

function pickChroma({ _seq, _transformState, currIndex }) {
  let chroma;
  const _transformStateCopy = { ..._transformState };

  switch (_transformState.pickers.chroma) {
    case "ChromaPoolShallow":
      chroma = pickValueFromPool(_transformState.chromaPool, false)[0];
      break;
    case "ChromaPoolDeep":
      {
        const [c, p] = pickValueFromPool(_transformStateCopy.chromaPool, true);
        chroma = c;
        _transformStateCopy.chromaPool = p;
      }

      break;
    case "CopyNeighbour":
      chroma = pickChromaFromNearest({ _seq, index: currIndex });
      break;
    case "ChromaPoolClosestMatch":
      chroma = "A"; //TBD
      break;
  }

  return { _transformState: _transformStateCopy, chroma };
}

function pickOctave({ _seq, _transformState, currIndex, currChroma }) {
  let octave;
  const _transformStateCopy = { ..._transformState };
  switch (_transformState.pickers.octave) {
    case "AscendDescend":
      {
        const [o, a] = pickOctaveDirectional({
          chroma: currChroma,
          prevNote: getNoteAtIndex({
            _seq,
            index: _transformState.visited.at(-1)
          }),
          isAscending: _transformState.isAscending
        });
        octave = o;
        _transformStateCopy.isAscending = a;
      }
      break;
    case "PreserveOctave":
      octave = getOctaveAtIndex(currIndex);
      break;
    case "OctavePoolShallow":
      octave = pickValueFromPool(_transformState.octavePool, false)[0];
      break;
    case "OctavePoolDeep":
      {
        const [o, p] = pickValueFromPool(_transformState.octavePool, true);
        octave = o;
        _transformStateCopy.octavePool = p;
      }
      break;
    case "CopyNeighbour":
      octave = pickOctaveFromNearest({ _seq, index });
      break;
  }

  return { _transformState: _transformStateCopy, octave };
}

export function pickNote({ _seq, _transformState, currIndex }) {
  const chroma = pickChroma({ _seq, _transformState, currIndex });
  // const octave =
}

export function pickValueFromPool(valuePool, isDeep = true) {
  if (valuePool.length === 0) {
    return [undefined, valuePool];
  }
  const valuePoolCopy = [...valuePool];
  if (isDeep) {
    return [deepChoose(valuePoolCopy), valuePoolCopy];
  }
  return [choose(valuePoolCopy), valuePoolCopy];
}

export function pickChromaFromNearest({ _seq, index }) {
  const beat = getNearestActiveBeat({ _seq, index });
  return getChromaAtIndex({ _seq, index: beat });
}

export function pickOctaveFromNearest({ _seq, index }) {
  const beat = getNearestActiveBeat({ _seq, index });
  return getOctaveAtIndex({ _seq, index: beat });
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
