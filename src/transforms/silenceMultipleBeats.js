export function initSilenceMultipleBeats({ _seq, ...args }) {
  return {
    transform: "silenceMultipleBeats",
    cyclesUntilNextAction: 3,
    isComplete: false,
    beats: [1, 3, 5, 7, 9, 11, 13], // this could be algorithmically determined
    ...args
  };
}

export function silenceMultipleBeats({ _transformState, _seq }) {
  const _transformStateCopy = { ..._transformState };
  const _seqCopy = [..._seq];
  _transformState.beats.forEach((beat) => {
    if (_seq[beat]) {
      _seqCopy[beat] = undefined;
    }
  });

  _transformStateCopy.isComplete = true;
  return { _transformState: _transformStateCopy, _seq: _seqCopy };
}
