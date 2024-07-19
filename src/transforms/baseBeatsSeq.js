import { seqCheck } from "./helpers/transform-utils";
import { pickNote } from "../pickers/pickers";

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

export function initBaseBeatsSeq({ _seq, ...args }) {
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
  _transformState,
  shouldProceed = () => true,
  checkComplete = seqCheck
}) {
  let _transformStateCopy = { ..._transformState };
  const _seqCopy = [..._seq];
  const beat = _transformStateCopy.sequence.shift();

  if (shouldProceed(_seqCopy[beat])) {
    const { note, pan, ...rest } = pickNote({
      _seq: _seqCopy,
      _transformState: _transformStateCopy,
      currIndex: beat
    });

    if (note) {
      _seqCopy[beat] = {
        note,
        pan
      };
    }

    _transformStateCopy = rest._transformState;
  }

  _transformStateCopy.visited.push(beat);

  _transformStateCopy.isComplete = checkComplete({
    _transformState: _transformStateCopy,
    _seq: _seqCopy
  });

  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}
