import { getNonActiveIndexes } from "../utils";
import { baseMultipleBeats, initBaseMultipleBeats } from "./baseMultilpleBeats";

export function initActivateMultipleBeats({ _seq, maxBeats, ...args }) {
  let beats = getNonActiveIndexes({ _seq });

  return {
    ...initBaseMultipleBeats({ _seq, maxBeats, beats }),
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
