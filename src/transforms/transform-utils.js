import { getFirstActiveBeat } from "../utils";

export function getModuloBeat({ _transformState, _seq }) {
  const ref =
    _transformState.visited.length === 0
      ? getFirstActiveBeat(_seq) || 0
      : _transformState.visited.at(-1);

  return (ref + _transformState.modulo) % _seq.length;
}
