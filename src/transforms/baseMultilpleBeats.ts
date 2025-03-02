import { shuffle } from "../utils";
import { pickNote } from "../pickers/pickers";
import { Note, Sequence, TransformState } from "../types";

export interface BaseMultipleBeatsState extends TransformState {
  pickers: {
    chroma: string;
    octave: string;
    pan: string;
  };
  cyclesUntilNextAction: number;
  isComplete: boolean;
  beats: number[];
}

interface InitBaseMultipleBeatsArgs {
  _seq: Sequence;
  beats?: number[];
  maxBeats?: number;
}

interface ShouldProceedFn {
  (note: Note | undefined): boolean;
}

export function initBaseMultipleBeats({
  _seq,
  beats,
  maxBeats,
  ...args
}: InitBaseMultipleBeatsArgs &
  Partial<BaseMultipleBeatsState>): BaseMultipleBeatsState {
  let _beats = beats ? [...beats] : _seq.map((b, i) => i);

  if (maxBeats && maxBeats < _beats.length) {
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
}: {
  _transformState: BaseMultipleBeatsState;
  _seq: Sequence;
  shouldProceed?: ShouldProceedFn;
}): {
  _transformState: BaseMultipleBeatsState;
  _seq: Sequence;
} {
  let _transformStateCopy: BaseMultipleBeatsState = { ..._transformState };
  const _seqCopy: Sequence = [..._seq];
  _transformState.beats.forEach((beat) => {
    if (shouldProceed(_seqCopy[beat])) {
      const { note, pan, ...rest } = pickNote({
        _seq: _seqCopy,
        _transformState: _transformStateCopy,
        currIndex: beat
      });

      if (note) {
        _seqCopy[beat] = {
          note,
          pan: pan ?? 0
        };
      }

      _transformStateCopy = rest._transformState as BaseMultipleBeatsState;
    }
  });

  _transformStateCopy.isComplete = true;
  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}
