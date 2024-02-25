import * as Tone from "tone";
import { randomArray, choose } from "./utils";
import {
  initActivateBeatsModulo,
  activateBeatsModulo,
  initSilenceBeatsModulo,
  silenceBeatsModulo,
  transforms
} from "./transforms";

import { sequenceFixtures } from "./sequence.fixtures";

// hot reload
new EventSource("/esbuild").addEventListener("change", () => location.reload());

/////////////// global state //////////////////

let seq;
let playbackBeat;
let currentTransformState;

//////////////// tonejs globals //////////////////

let masterChannel;

//////////////// UI ////////////////

Object.keys(sequenceFixtures).forEach((k) => {
  const elem = document.createElement(`option`);
  elem.value = k;
  elem.innerHTML = k;
  document.querySelector("#sequence").appendChild(elem);
});

Object.keys(transforms).forEach((k) => {
  const elem = document.createElement(`option`);
  elem.value = k;
  elem.innerHTML = k;
  document.querySelector("#transform").appendChild(elem);
});

document.querySelector("#start-audio").addEventListener("click", () => {
  setup();
  const matches = document.querySelectorAll(".control-button");
  matches.forEach((m) => (m.disabled = false));
  document.querySelector("#start-audio").disabled = true;
});

document.querySelector("#start")?.addEventListener("click", async () => {
  playbackBeat = 0;

  const s = document.querySelector("#sequence").value;

  if (sequenceFixtures[s]) {
    seq = sequenceFixtures[s]();
  } else {
    seq = new Array(20);
    seq[0] = {
      note: "A3",
      pan: 0
    };
  }

  const t = document.querySelector("#transform").value;

  if (transforms[t]) {
    currentTransformState = transforms[t].init({ _seq: seq });
  } else {
    currentTransformState = null;
  }

  Tone.Transport.start();
});

document.querySelector("#stop")?.addEventListener("click", async () => {
  Tone.Transport.stop();
});

document.querySelector("#sequence")?.addEventListener("change", (event) => {
  if (sequenceFixtures[event.target.value]) {
    seq = sequenceFixtures[event.target.value]();
  }
});

document.querySelector("#transform")?.addEventListener("change", (event) => {
  if (transforms[event.target.value]) {
    currentTransformState = transforms[event.target.value].init({ _seq: seq });
  }
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
        `cycles until next action: ${currentTransformState.cyclesUntilNextAction}`,
        0,
        100
      );

      context.fillText(
        `isAscending: ${currentTransformState.isAscending}`,
        0,
        120
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

  currentTransformState = getNextTransform({
    _transformState: currentTransformState,
    _seq: seq
  });

  if (playbackBeat === 0) {
    if (currentTransformState.cyclesUntilNextAction === 0) {
      const { _seq, _transformState } = applyTransforms({
        _transformState: currentTransformState,
        _seq: seq
      });
      seq = _seq;
      _transformState.cyclesUntilNextAction = choose([1, 2, 3]);
      currentTransformState = _transformState;
    } else {
      currentTransformState.cyclesUntilNextAction -= 1;
    }
  }

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

function getNextTransform({ _transformState, _seq }) {
  if (!_transformState) {
    return initActivateBeatsModulo({ _seq });
  }

  if (_transformState.isComplete) {
    return chooseTransform({ _transformState, _seq });
  }

  return _transformState;
}

function applyTransforms({ _transformState, _seq }) {
  switch (_transformState.transform) {
    case "fill-sequence":
      return activateBeatsModulo({
        _transformState,
        _seq
      });
    case "reduce-sequence":
      return silenceBeatsModulo({ _transformState, _seq });
    default:
      throw new Error("transform not found");
  }
}

function chooseTransform({ _transformState, _seq }) {
  if (_transformState.transform === "fill-sequence") {
    return initSilenceBeatsModulo({ _seq });
  } else {
    return initActivateBeatsModulo({ _seq });
  }
}
