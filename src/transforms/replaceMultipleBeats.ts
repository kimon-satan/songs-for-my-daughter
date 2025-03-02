import {
  baseMultipleBeats,
  initBaseMultipleBeats,
  BaseMultipleBeatsState
} from "./baseMultilpleBeats";
import { Sequence } from "../types";

export function initReplaceMultipleBeats({
  _seq,
  ...args
}: {
  _seq: Sequence;
} & Partial<BaseMultipleBeatsState>): BaseMultipleBeatsState {
  return {
    ...initBaseMultipleBeats({ _seq }),
    transform: "replaceMultipleBeats",
    ...args
  };
}

export function replaceMultipleBeats({
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
    shouldProceed: (beat) => !!beat
  });
}
