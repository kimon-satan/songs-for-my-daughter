import { getFirstActiveBeat, getActiveBeats } from "../../utils";
import { Sequence } from "../../types";

interface ModuloState {
  visited: number[];
  modulo: number;
}

export function getModuloBeat<T extends ModuloState>({
  _transformState,
  _seq
}: {
  _transformState: T;
  _seq: Sequence;
}): number {
  const ref =
    _transformState.visited.length === 0
      ? getFirstActiveBeat(_seq) || 0
      : _transformState.visited.at(-1) || 0;

  return (ref + _transformState.modulo) % _seq.length;
}

export function maxBeatsCheck<T extends { maxBeats: number }>({
  _transformState,
  _seq
}: {
  _transformState: T;
  _seq: Sequence;
}): boolean {
  return getActiveBeats(_seq).length >= _transformState.maxBeats;
}

export function maxRepsCheck<T extends { maxReps: number; visited: number[] }>({
  _transformState
}: {
  _transformState: T;
}): boolean {
  return _transformState.visited.length >= _transformState.maxReps;
}

export function revistedCheck<T extends ModuloState>({
  _transformState,
  _seq
}: {
  _transformState: T;
  _seq: Sequence;
}): boolean {
  const nextBeat = getModuloBeat({
    _transformState,
    _seq
  });
  return _transformState.visited.includes(nextBeat);
}

export function allChecks<
  T extends ModuloState & {
    maxBeats: number;
    maxReps: number;
    chromaPool: any[];
  }
>({ _transformState, _seq }: { _transformState: T; _seq: Sequence }): boolean {
  return (
    revistedCheck({ _transformState, _seq }) ||
    maxBeatsCheck({ _transformState, _seq }) ||
    maxRepsCheck({ _transformState }) ||
    _transformState.chromaPool.length === 0
  );
}

export function seqCheck<T extends { sequence?: any[] }>({
  _transformState
}: {
  _transformState: T;
}): boolean {
  return _transformState.sequence?.length === 0;
}
