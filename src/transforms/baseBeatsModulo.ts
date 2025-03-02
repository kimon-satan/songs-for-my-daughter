import { getModuloBeat, allChecks } from "./helpers/transform-utils";
import { pickNote } from "../pickers/pickers";
import { Note, Sequence, TransformState } from "../types";

export interface BaseBeatsModuloState extends TransformState {
  pickers: {
    chroma: string;
    octave: string;
    pan: string;
  };
  chromaPool: string[];
  visited: number[];
  cyclesUntilNextAction: number;
  isAscending: boolean;
  isComplete: boolean;
  modulo: number;
  maxBeats: number;
  maxReps: number;
}

interface ShouldProceedFn {
  (note: Note | undefined): boolean;
}

interface CheckCompleteFn {
  (args: { _transformState: BaseBeatsModuloState; _seq: Sequence }): boolean;
}

/**
 *
 * @description
 * activates or replaces a beat
 * shouldProceed is a composable function
 * uses a modulo to select the next beat to be replaced
 * ends if:
 *  - reencounters a visted beat
 *  - maxReps reached
 *  - maxBeats are activated / replaced
 */

export function initBaseBeatsModulo({
  _seq,
  ...args
}: { _seq: Sequence } & Partial<BaseBeatsModuloState>): BaseBeatsModuloState {
  return {
    transform: "baseBeatsModulo",
    pickers: {
      chroma: "ChromaPoolDeep",
      octave: "AscendDescend",
      pan: "Random"
    },
    chromaPool: new Array(10).fill("A"),
    visited: [],
    cyclesUntilNextAction: 3,
    isAscending: true,
    isComplete: false,
    modulo: 14,
    maxBeats: 10,
    maxReps: 10,
    ...args
  };
}

export function baseBeatsModulo({
  _seq,
  _transformState,
  shouldProceed = () => true,
  checkComplete = allChecks
}: {
  _seq: Sequence;
  _transformState: BaseBeatsModuloState;
  shouldProceed?: ShouldProceedFn;
  checkComplete?: CheckCompleteFn;
}): {
  _transformState: BaseBeatsModuloState;
  _seq: Sequence;
} {
  let _transformStateCopy: BaseBeatsModuloState = { ..._transformState };
  const _seqCopy: Sequence = [..._seq];
  const beat = getModuloBeat({ _seq, _transformState });

  if (shouldProceed(_seqCopy[beat])) {
    const { note, pan, ...rest } = pickNote({
      _seq: _seqCopy,
      _transformState: _transformStateCopy,
      currIndex: beat
    });

    if (note) {
      _seqCopy[beat] = {
        note,
        pan: pan ?? 0
      };
    }

    _transformStateCopy = rest._transformState as BaseBeatsModuloState;
  }

  _transformStateCopy.visited.push(beat);

  _transformStateCopy.isComplete = checkComplete({
    _transformState: _transformStateCopy,
    _seq: _seqCopy
  });

  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}
