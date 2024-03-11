import { revistedCheck, maxRepsCheck } from "./helpers/transform-utils";
import { baseBeatsModulo, initBaseBeatsModulo } from "./baseBeatsModulo";

/**
 *
 * @description
 * replaces a beat
 * only if occupied
 * uses a modulo to select the next beat to be replaced
 * ends if:
 *  - reencounters a visted beat
 *  - maxReps reached
 *  - maxBeats are activated
 */

export function initReplaceBeatsModulo({ _seq, ...args }) {
  const base = initBaseBeatsModulo({ _seq });

  return {
    ...base,
    transform: "replaceBeatsModulo",
    notePool: ["A", "A", "B", "C", "D", "E", "F", "G", "F#", "C#"],
    ...args
  };
}

export function replaceBeatsModulo({ _seq, _transformState }) {
  return baseBeatsModulo({
    _seq,
    _transformState,
    shouldProceed: (beat) => beat !== undefined,
    checkComplete: ({ _transformState, _seq }) =>
      revistedCheck({ _transformState, _seq }) ||
      maxRepsCheck({ _transformState, _seq }) ||
      _transformState.notePool.length === 0
  });
}
