import { shuffle } from "../utils";

import {
  pickChromaFromNearest,
  pickChromaFromNotePool,
  pickPanRandom
} from "./pickers";

export function initBaseMultipleBeats({ _seq, beats, maxBeats, ...args }) {
  let _beats = beats ? [...beats] : _seq.map((b, i) => i);

  if (maxBeats ?? maxBeats < _beats.length) {
    _beats = shuffle(_beats);
    _beats.splice(0, _beats.length - maxBeats);
  }

  return {
    transform: "baseMultipleBeats",
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
  const _transformStateCopy = { ..._transformState };
  const _seqCopy = [..._seq];
  _transformState.beats.forEach((beat) => {
    if (shouldProceed(_seqCopy[beat])) {
      const chroma = (() => {
        if (_transformState.notePool) {
          const [chroma] = pickChromaFromNotePool(
            _transformState.notePool,
            false
          );
          return chroma;
        }
        return pickChromaFromNearest({ _seq, index: beat });
      })();

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
