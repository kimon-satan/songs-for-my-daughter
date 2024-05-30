import { baseMultipleBeats, initBaseMultipleBeats } from "./baseMultilpleBeats";

export function initReplaceMultipleBeats({ _seq, ...args }) {
  return {
    ...initBaseMultipleBeats({ _seq }),
    transform: "replaceMultipleBeats",
    ...args
  };
}

export function replaceMultipleBeats({ _transformState, _seq }) {
  return baseMultipleBeats({
    _seq,
    _transformState,
    shouldProceed: (beat) => !!beat
  });
}
