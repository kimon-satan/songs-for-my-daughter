import * as Tone from "tone";
import { choose, deepChoose, randomArray } from "./utils";

// hot reload
new EventSource("/esbuild").addEventListener("change", () => location.reload());

/////////////// global state //////////////////

let seq;
let playbackBeat;
let currentTransformState;

//////////////// tonejs globals //////////////////

let masterChannel;

//////////////// UI ////////////////

document.querySelector("#start-audio").addEventListener("click", () => {
  setup();
  const matches = document.querySelectorAll(".control-button");
  matches.forEach((m) => (m.disabled = false));
  document.querySelector("#start-audio").disabled = true;
});

document.querySelector("#start")?.addEventListener("click", async () => {
  playbackBeat = 0;
  currentTransformState = null;
  seq = new Array(20);
  seq[0] = {
    note: "A3",
    pan: 0
  };
  Tone.Transport.start();
});

document.querySelector("#stop")?.addEventListener("click", async () => {
  Tone.Transport.stop();
});

///////////////////////// Setup //////////////////////////

async function setup() {
  await Tone.start();
  Tone.Transport.bpm = 100;
  masterChannel = new Tone.Channel({ channelCount: 2 });
  masterChannel.toDestination();
  setupMeter();
  // create the sequencer loop
  new Tone.Loop(loop, "16n").start(0);
}

function setupMeter() {
  const meter = [new Tone.Meter(), new Tone.Meter()];
  const split = new Tone.Split();
  masterChannel.connect(split);
  split.connect(meter[0], 0, 0);
  split.connect(meter[1], 1, 0);

  const canvas = document.querySelector("#meter");
  const context = canvas.getContext("2d");

  const drawVolume = (dbs, x = 100) => {
    const amps = Math.pow(Tone.dbToGain(dbs), 0.5) * 200;
    context.fillStyle = `rgb(255,0,0)`;
    context.fillRect(x, canvas.height - amps, 100, amps);
    context.fillStyle = `rgb(0,0,0)`;
    context.fillText(amps, x + 50, 50);
  };

  const updateMeter = () => {
    const dbs = meter.map((m) => m.getValue());
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = `rgb(0,0,255,0.25)`;
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawVolume(dbs[0], 75);
    drawVolume(dbs[1], 225);
    context.fillStyle = `rgb(0,0,0)`;
    context.fillText(`playbackBeat: ${playbackBeat}`, 0, 50);

    if (currentTransformState) {
      context.fillText(
        `${currentTransformState.cyclesUntilNextAction}`,
        0,
        100
      );
    }

    context, window.requestAnimationFrame(updateMeter);
  };

  updateMeter();
}

////////////////////////////////// Loop functions ///////////////////////////////

function loop(time) {
  if (seq[playbackBeat]) {
    playCurrentNote(seq[playbackBeat], time);
  }
  currentTransformState = applyTransforms(currentTransformState);
  playbackBeat = (playbackBeat + 1) % seq.length;
}

function playCurrentNote(note, time) {
  const panner = new Tone.Panner(note.pan).connect(masterChannel);
  const synth = new Tone.Synth({
    volume: -25,
    oscillator: {
      baseType: "sine",
      partialCount: 10,
      partials: randomArray(10, true)
    },
    envelope: {
      attackCurve: "exponential",
      attack: 0.01,
      decay: 0.3,
      sustain: 0.95,
      release: 5,
      releaseCurve: "exponential"
    },
    onsilence: (instrument) => {
      instrument.dispose();
      panner.dispose();
    }
  });
  synth.connect(panner);
  synth.triggerAttackRelease(note.note, "16n", time);
}

////////////////////////////////

function applyTransforms(_currentTransformState) {
  let _transformState = _currentTransformState
    ? { ..._currentTransformState }
    : initFillSequence();

  if (_transformState.isComplete) {
    _transformState = chooseTransform(_transformState);
  } else {
    switch (_transformState.transform) {
      case "fill-sequence":
        _transformState = fillSequence(_transformState);
        break;
      case "reduce-sequence":
        _transformState = reduceSequence(_transformState);
        break;
      default:
        throw new Error("transform not found");
    }
  }

  return _transformState;
}

function chooseTransform(_transformState) {
  if (_transformState.transform === "fill-sequence") {
    return initReduceSequence();
  } else {
    return initFillSequence();
  }
}

//////////////////////////////// Transforms /////////////////////////////

function initFillSequence() {
  return {
    transform: "fill-sequence",
    notePool: ["A", "A", "B", "C", "D", "E", "F", "G", "F#", "C#"],
    lastAdditionOnBeat: 0,
    cyclesUntilNextAction: 3,
    isAscending: true,
    isComplete: false
  };
}

function fillSequence(_currentTransformState) {
  const _transformState = { ..._currentTransformState };
  _transformState.isComplete = _transformState.notePool.length === 0;

  if (playbackBeat === 0) {
    if (_transformState.cyclesUntilNextAction === 0) {
      const beat = (_transformState.lastAdditionOnBeat + 14) % seq.length;
      const chroma = getNextChroma(_transformState);
      const [octave, isAscending] = getNextOctave(chroma, _transformState);
      _transformState.isAscending = isAscending;
      const note = chroma + octave;

      if (note) {
        seq[beat] = {
          note,
          pan: getNextPan()
        };
      }
      _transformState.lastAdditionOnBeat = beat;
      _transformState.cyclesUntilNextAction = choose([1]);
    } else {
      _transformState.cyclesUntilNextAction -= 1;
    }
  }

  return _transformState;
}

function getNextChroma(_currentTransformState) {
  const { notePool, lastAdditionOnBeat = 0 } = _currentTransformState;
  if (notePool.length === 0) {
    return undefined;
  }
  return deepChoose(notePool);
}

function getNextOctave(chroma, _currentTransformState) {
  const { lastAdditionOnBeat, isAscending } = _currentTransformState;
  const prevNote = seq[lastAdditionOnBeat].note;

  if (!prevNote) {
    return 3;
  }

  let currOctave = Number(prevNote.substring(prevNote.length - 1));

  if (isAscending) {
    if (
      Tone.Frequency(chroma + currOctave).toMidi() <
      Tone.Frequency(prevNote).toMidi()
    ) {
      currOctave += 1;
    }
    return [Math.min(currOctave, 6), currOctave < 6];
  } else {
    if (
      Tone.Frequency(chroma + currOctave).toMidi() >
      Tone.Frequency(prevNote).toMidi()
    ) {
      currOctave -= 1;
    }
    return [Math.max(currOctave, 3), currOctave > 3];
  }
}

function getNextPan(_currentTransformState, centroidBias = 1) {
  const pan = -1 + Math.pow(Math.random(), centroidBias) * 2;
  return pan;
}

function initReduceSequence() {
  return {
    transform: "reduce-sequence",
    lastSubtractionOnBeat: 0,
    cyclesUntilNextAction: 3,
    isComplete: false
  };
}

function reduceSequence(_currentTransformState) {
  let _transformState = { ..._currentTransformState };

  const notesRemaining = seq.reduce((prev, curr) => prev + (curr ? 1 : 0), 0);

  if (notesRemaining === 3) {
    _transformState.isComplete = true;
  }

  if (playbackBeat === 0) {
    if (_transformState.cyclesUntilNextAction === 0) {
      const beat = (_transformState.lastSubtractionOnBeat + 14) % seq.length;
      seq[beat] = undefined;
      _transformState.lastSubtractionOnBeat = beat;
      _transformState.cyclesUntilNextAction = choose([1, 2, 3]);
    } else {
      _transformState.cyclesUntilNextAction -= 1;
    }
  }
  return _transformState;
}
