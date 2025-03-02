import { revistedCheck, maxRepsCheck } from "./helpers/transform-utils";
import {
  baseBeatsModulo,
  initBaseBeatsModulo,
  BaseBeatsModuloState
} from "./baseBeatsModulo";
import { Sequence } from "../types";

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

export function initReplaceBeatsModulo({
  _seq,
  ...args
}: { _seq: Sequence } & Partial<BaseBeatsModuloState>): BaseBeatsModuloState {
  const base = initBaseBeatsModulo({ _seq });

  return {
    ...base,
    transform: "replaceBeatsModulo",
    chromaPool: ["A", "A", "B", "C", "D", "E", "F", "G", "F#", "C#"],
    ...args
  };
}

export function replaceBeatsModulo({
  _seq,
  _transformState
}: {
  _seq: Sequence;
  _transformState: BaseBeatsModuloState;
}): {
  _seq: Sequence;
  _transformState: BaseBeatsModuloState;
} {
  return baseBeatsModulo({
    _seq,
    _transformState,
    shouldProceed: (beat) => beat !== undefined,
    checkComplete: ({ _transformState, _seq }) =>
      revistedCheck({ _transformState, _seq }) ||
      maxRepsCheck({ _transformState }) ||
      _transformState.chromaPool.length === 0
  });
}
