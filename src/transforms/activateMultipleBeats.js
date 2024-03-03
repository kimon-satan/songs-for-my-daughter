import {
  pickChromaFromNearest,
  pickChromaFromNotePool,
  pickPanRandom
} from "./pickers";

export function initActivateMultipleBeats({ _seq, ...args }) {
  return {
    transform: "activateMultipleBeats",
    cyclesUntilNextAction: 3,
    isComplete: false,
    beats: [1, 3, 5, 7, 9, 11, 13], // this could be algorithmically determined
    notePool: ["A", "B", "C"],
    ...args
  };
}

export function activateMultipleBeats({ _transformState, _seq }) {
  const _transformStateCopy = { ..._transformState };
  const _seqCopy = [..._seq];
  _transformState.beats.forEach((beat) => {
    if (!_seq[beat]) {
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
