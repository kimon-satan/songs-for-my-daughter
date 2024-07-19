import { baseBeatsSeq, initBaseBeatsSeq } from "./baseBeatsSeq";
import { seqCheck } from "./helpers/transform-utils";

export function initReplaceBeatsSeq({ _seq, ...args }) {
  return initBaseBeatsSeq({ _seq, ...args });
}

export function replaceBeatsSeq({ _transformState, _seq }) {
  return baseBeatsSeq({
    _transformState,
    _seq,
    shouldProceed: (beat) => beat !== undefined,
    checkComplete: ({ _transformState, _seq }) =>
      seqCheck({ _transformState, _seq }) ||
      _transformState.chromaPool.length === 0
  });
}
