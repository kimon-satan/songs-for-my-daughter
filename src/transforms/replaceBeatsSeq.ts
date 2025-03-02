import { Sequence, TransformState } from "../types";

export function initReplaceBeatsSeq({
  _seq,
  ...args
}: {
  _seq: Sequence;
  [key: string]: any;
}) {
  return {
    ...args,
    chromaPool: ["C", "D", "E", "F", "G", "A", "B"]
  };
}

export interface ReplaceBeatsState extends TransformState {
  chromaPool: string[];
}

export function replaceBeatsSeq({
  _transformState,
  _seq
}: {
  _transformState: ReplaceBeatsState;
  _seq: Sequence;
}) {
  const _seqCopy = [..._seq];
  const beat = Math.floor(Math.random() * _seq.length);

  if (_seqCopy[beat] !== undefined) {
    const note =
      _transformState.chromaPool[
        Math.floor(Math.random() * _transformState.chromaPool.length)
      ];
    _seqCopy[beat] = {
      note,
      pan: 0
    };
  }

  return {
    _transformState,
    _seq: _seqCopy
  };
}
