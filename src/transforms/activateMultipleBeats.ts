import { getNonActiveIndexes } from "../utils";
import {
  baseMultipleBeats,
  initBaseMultipleBeats,
  BaseMultipleBeatsState
} from "./baseMultilpleBeats";
import { Sequence } from "../types";

interface InitActivateMultipleBeatsArgs {
  _seq: Sequence;
  maxBeats?: number;
}

export function initActivateMultipleBeats({
  _seq,
  maxBeats,
  ...args
}: InitActivateMultipleBeatsArgs &
  Partial<BaseMultipleBeatsState>): BaseMultipleBeatsState {
  const beats = getNonActiveIndexes({ _seq });

  return {
    ...initBaseMultipleBeats({ _seq, maxBeats, beats }),
    transform: "activateMultipleBeats",
    ...args
  };
}

export function activateMultipleBeats({
  _transformState,
  _seq
}: {
  _transformState: BaseMultipleBeatsState;
  _seq: Sequence;
}): {
  _transformState: BaseMultipleBeatsState;
  _seq: Sequence;
} {
  return baseMultipleBeats({
    _seq,
    _transformState,
    shouldProceed: (beat) => beat === undefined
  });
}
