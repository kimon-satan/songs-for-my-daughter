import * as Tone from "tone";

import {
  choose,
  deepChoose,
  getChromaAtIndex,
  getNoteAtIndex,
  getNearestActiveBeat,
  getOctaveFromNote,
  getOctaveAtIndex,
  calculateChromaDistance
} from "../utils";

export const CHROMA_PICKERS = [
  "ChromaPoolShallow",
  "ChromaPoolDeep",
  "CopyNeighbour",
  "ClosestMatch",
  "ClosestMatchNeighbour"
];

export const OCTAVE_PICKERS = [
  "AscendDescend",
  "PreserveOctave",
  "OctavePoolShallow",
  "OctavePoolDeep",
  "CopyNeighbour",
  "Constant"
];

export const PAN_PICKERS = ["Random", "PreservePan"];

export function pickNote({ _seq, _transformState, currIndex }) {
  const chroma = pickChroma({
    _seq: _seq,
    _transformState,
    currIndex
  });

  const octave = pickOctave({
    _seq: _seq,
    _transformState: chroma._transformState,
    currIndex,
    currChroma: chroma.chroma
  });

  const note =
    chroma.chroma && octave.octave ? chroma.chroma + octave.octave : null;
  const pan = note ? pickPanRandom() : null;

  return {
    note,
    pan,
    _transformState: octave._transformState
  };
}

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
    case "ClosestMatch":
      chroma = pickNearestValue({
        valuePool: _transformState.chromaPool,
        chroma: getChromaAtIndex({ _seq, index: currIndex })
      });
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
      octave = getOctaveAtIndex({ _seq, index: currIndex });
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
      octave = pickOctaveFromNearest({ _seq, index: currIndex });
      break;
    case "Constant":
      octave = _transformState.octave ?? 4;
      break;
  }

  return { _transformState: _transformStateCopy, octave };
}

function pickChromaFromNearest({ _seq, index }) {
  const beat = getNearestActiveBeat({ _seq, index });
  return getChromaAtIndex({ _seq, index: beat });
}

function pickOctaveFromNearest({ _seq, index }) {
  const beat = getNearestActiveBeat({ _seq, index });
  return getOctaveAtIndex({ _seq, index: beat });
}

function pickOctaveDirectional({ chroma, prevNote, isAscending }) {
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

function pickPanRandom(centroidBias = 1) {
  const pan = -1 + Math.pow(Math.random(), centroidBias) * 2;
  return pan;
}

/////////////////////////// UTILS ///////////////////////////

export function pickNearestValue({ valuePool, chroma }) {
  let smallestDistance = 24;
  let closestChroma = null;
  for (const c of valuePool) {
    const delta = calculateChromaDistance(chroma, c);
    if (delta < smallestDistance) {
      smallestDistance = delta;
      closestChroma = c;
    }
  }
  return closestChroma;
}

function pickValueFromPool(valuePool, isDeep = true) {
  if (valuePool.length === 0) {
    return [undefined, valuePool];
  }
  const valuePoolCopy = [...valuePool];
  if (isDeep) {
    return [deepChoose(valuePoolCopy), valuePoolCopy];
  }
  return [choose(valuePoolCopy), valuePoolCopy];
}
