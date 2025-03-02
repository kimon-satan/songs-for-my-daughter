import { Sequence, TransformState } from "../types";

/**
 *
 * @description
 * activates or replaces a beat
 * shouldProceed is a composable function
 * selects the next beat via a sequence
 * ends if:
 *  - reencounters a visted beat
 *  - maxReps reached
 *  - maxBeats are activated / replaced
 */

export function initBaseBeatsSeq({
  _seq,
  ...args
}: {
  _seq: Sequence;
  [key: string]: any;
}) {
  return {
    transform: "baseBeatsSeq",
    pickers: {
      chroma: "ChromaPoolDeep",
      octave: "AscendDescend",
      pan: "Random"
    },
    chromaPool: new Array(10).fill("A"),
    visited: [],
    cyclesUntilNextAction: 3,
    isAscending: true,
    isComplete: false,
    sequence: [],
    ...args
  };
}

export function baseBeatsSeq({
  _seq,
  _transformState
}: {
  _seq: Sequence;
  _transformState: TransformState;
}) {
  const _seqCopy = [..._seq];
  const beat = Math.floor(Math.random() * _seq.length);

  if (_seqCopy[beat] !== undefined) {
    _seqCopy[beat] = {
      note: "A",
      pan: 0
    };
  }

  return {
    _transformState,
    _seq: _seqCopy
  };
}
