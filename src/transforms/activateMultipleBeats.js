import { baseMultipleBeats, initBaseMultipleBeats } from "./baseMultilpleBeats";

export function initActivateMultipleBeats({ _seq, ...args }) {
  return {
    ...initBaseMultipleBeats({ _seq }),
    transform: "activateMultipleBeats",
    ...args
  };
}

export function activateMultipleBeats({ _transformState, _seq }) {
  return baseMultipleBeats({
    _seq,
    _transformState,
    shouldProceed: (beat) => beat === undefined
  });
}
