import { shuffle } from "../utils";

import { pickNote } from "../pickers/pickers";

export function initBaseMultipleBeats({ _seq, beats, maxBeats, ...args }) {
  let _beats = beats ? [...beats] : _seq.map((b, i) => i);

  if (maxBeats ?? maxBeats < _beats.length) {
    _beats = shuffle(_beats);
    _beats.splice(0, _beats.length - maxBeats);
  }

  return {
    transform: "baseMultipleBeats",
    pickers: {
      chroma: "CopyNeighbour",
      octave: "CopyNeighbour",
      pan: "Random"
    },
    cyclesUntilNextAction: 3,
    isComplete: false,
    beats: _beats, // by default all beats
    ...args
  };
}

export function baseMultipleBeats({
  _transformState,
  _seq,
  shouldProceed = () => true
}) {
  let _transformStateCopy = { ..._transformState };
  const _seqCopy = [..._seq];
  _transformState.beats.forEach((beat) => {
    if (shouldProceed(_seqCopy[beat])) {
      const { note, pan, ...rest } = pickNote({
        _seq: _seqCopy,
        _transformState: _transformStateCopy,
        currIndex: beat
      });

      _seqCopy[beat] = {
        note,
        pan
      };

      _transformStateCopy = rest._transformState;
    }
  });

  _transformStateCopy.isComplete = true;
  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}
