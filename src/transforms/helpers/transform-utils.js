import { getFirstActiveBeat, getActiveBeats } from "../../utils";

export function getModuloBeat({ _transformState, _seq }) {
  const ref =
    _transformState.visited.length === 0
      ? getFirstActiveBeat(_seq) || 0
      : _transformState.visited.at(-1);

  return (ref + _transformState.modulo) % _seq.length;
}

export function maxBeatsCheck({ _transformState, _seq }) {
  return getActiveBeats(_seq).length >= _transformState.maxBeats;
}

export function maxRepsCheck({ _transformState }) {
  return _transformState.visited.length >= _transformState.maxReps;
}

export function revistedCheck({ _transformState, _seq }) {
  const nextBeat = getModuloBeat({
    _transformState,
    _seq
  });
  return _transformState.visited.includes(nextBeat);
}

export function allChecks({ _transformState, _seq }) {
  return (
    revistedCheck({ _transformState, _seq }) ||
    maxBeatsCheck({ _transformState, _seq }) ||
    maxRepsCheck({ _transformState, _seq }) ||
    _transformState.notePool.length === 0
  );
}
