import { baseBeatsModulo, initBaseBeatsModulo } from "./baseBeatsModulo";

/**
 *
 * @description
 * activates a beat
 * only if unoccupied
 * uses a modulo to select the next beat to be activated
 * ends if:
 *  - reencounters a visted beat
 *  - maxReps reached
 *  - maxBeats are activated
 */

export function initActivateBeatsModulo({ _seq, ...args }) {
  const base = initBaseBeatsModulo({ _seq });

  return {
    ...base,
    transform: "activateBeatsModulo",
    chromaPool: ["A", "A", "B", "C", "D", "E", "F", "G", "F#", "C#"],
    ...args
  };
}

export function activateBeatsModulo({ _seq, _transformState }) {
  return baseBeatsModulo({
    _seq,
    _transformState,
    shouldProceed: (beat) => beat === undefined
  });
}
