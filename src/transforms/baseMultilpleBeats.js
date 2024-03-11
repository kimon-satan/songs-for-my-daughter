import {
  pickChromaFromNearest,
  pickChromaFromNotePool,
  pickPanRandom
} from "./pickers";

export function initBaseMultipleBeats({ _seq, ...args }) {
  return {
    transform: "baseMultipleBeats",
    cyclesUntilNextAction: 3,
    isComplete: false,
    beats: [1, 3, 5, 7, 9, 11, 13], // this could be algorithmically determined
    notePool: ["A", "B", "C"],
    ...args
  };
}

export function baseMultipleBeats({
  _transformState,
  _seq,
  shouldProceed = () => true
}) {
  const _transformStateCopy = { ..._transformState };
  const _seqCopy = [..._seq];
  _transformState.beats.forEach((beat) => {
    if (shouldProceed(_seqCopy[beat])) {
      // const [chroma] = pickChromaFromNotePool(_transformState.notePool, false);
      const chroma = pickChromaFromNearest({ _seq, index: beat });
      const octave = 4;
      const pan = pickPanRandom();
      _seqCopy[beat] = {
        note: chroma + octave,
        pan
      };
    }
  });

  _transformStateCopy.isComplete = true;
  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}
