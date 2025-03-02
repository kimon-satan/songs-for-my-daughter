import * as Tone from "tone";
import { choose, displayJSON, safeParseJson } from "./utils";
import { transforms } from "./transforms/transforms";
import { getActiveBeats } from "./utils";
import { chooseTransform } from "./chooseTransform";
import { sequenceFixtures } from "./sequence.fixtures";
import { Note, Sequence, TransformState } from "./types";

// hot reload
new EventSource("/esbuild").addEventListener("change", () => location.reload());

/////////////// global state //////////////////

let seq: Sequence;
let playbackBeat: number;
let currentTransformState: TransformState | null;

//////////////// tonejs globals //////////////////

let masterChannel: Tone.Channel;

//////////////// UI ////////////////

Object.keys(sequenceFixtures).forEach((k) => {
  const elem = document.createElement("option");
  elem.value = k;
  elem.innerHTML = k;
  const sequenceSelect = document.querySelector<HTMLSelectElement>("#sequence");
  if (sequenceSelect) sequenceSelect.appendChild(elem);
});

Object.keys(transforms).forEach((k) => {
  const elem = document.createElement("option");
  elem.value = k;
  elem.innerHTML = k;
  const transformSelect =
    document.querySelector<HTMLSelectElement>("#transform");
  if (transformSelect) transformSelect.appendChild(elem);
});

document.querySelector("#start-audio")?.addEventListener("click", () => {
  setup();
  const matches =
    document.querySelectorAll<HTMLButtonElement>(".control-button");
  matches.forEach((m) => (m.disabled = false));
  const startAudioButton =
    document.querySelector<HTMLButtonElement>("#start-audio");
  if (startAudioButton) startAudioButton.disabled = true;
});

document.querySelector("#start")?.addEventListener("click", async () => {
  playbackBeat = 0;

  const sequenceSelect = document.querySelector<HTMLSelectElement>("#sequence");
  const s = sequenceSelect?.value || "";

  if (sequenceFixtures[s]) {
    seq = sequenceFixtures[s]();
  } else {
    seq = new Array(20);
    seq[0] = {
      note: "A3",
      pan: 0
    };
  }

  const transformSelect =
    document.querySelector<HTMLSelectElement>("#transform");
  const t = transformSelect?.value || "";
  const transformArgs =
    document.querySelector<HTMLTextAreaElement>("#transform-args");
  const raw_args = transformArgs?.value || "{}";

  const parsed_args = safeParseJson(raw_args);

  if (transforms[t]) {
    currentTransformState = transforms[t].init({ _seq: seq, ...parsed_args });
  } else {
    currentTransformState = null;
  }

  Tone.Transport.start();
});

document.querySelector("#stop")?.addEventListener("click", async () => {
  Tone.Transport.stop();
});

document.querySelector("#sequence")?.addEventListener("change", (event) => {
  const target = event.target as HTMLSelectElement;
  if (sequenceFixtures[target.value]) {
    seq = sequenceFixtures[target.value]();
  }
});

document.querySelector("#apply-transform")?.addEventListener("click", () => {
  const transformSelect =
    document.querySelector<HTMLSelectElement>("#transform");
  const t = transformSelect?.value || "";
  const transformArgs =
    document.querySelector<HTMLTextAreaElement>("#transform-args");
  const raw_args = transformArgs?.value || "{}";
  const parsed_args = safeParseJson(raw_args);
  if (transforms[t]) {
    currentTransformState = transforms[t].init({
      _seq: seq,
      ...parsed_args
    });
  }
});

///////////////////////// Setup //////////////////////////

async function setup(): Promise<void> {
  await Tone.start();
  Tone.Transport.bpm.value = 100;
  masterChannel = new Tone.Channel({ channelCount: 2 });
  masterChannel.toDestination();
  setupMeter();
  // create the sequencer loop
  new Tone.Loop(loop, "16n").start(0);
}

function setupMeter(): void {
  const meter = [new Tone.Meter(), new Tone.Meter()];
  const split = new Tone.Split();
  masterChannel.connect(split);
  split.connect(meter[0], 0, 0);
  split.connect(meter[1], 1, 0);

  const canvas = document.querySelector<HTMLCanvasElement>("#meter");
  if (!canvas) return;
  const context = canvas.getContext("2d");
  if (!context) return;

  const drawVolume = (dbs: number, x = 100): void => {
    const amps = Math.pow(Tone.dbToGain(dbs), 0.5) * 200;
    context.fillStyle = `rgb(255,0,0)`;
    context.fillRect(x, canvas.height - amps, 100, amps);
    context.fillStyle = `rgb(0,0,0)`;
    context.fillText(amps.toString(), x + 50, 50);
  };

  const updateMeter = (): void => {
    context.setTransform(1, 0, 0, 1, 0, 0);
    const dbs = meter.map((m) => m.getValue() as number);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = `rgb(0,0,255,0.25)`;
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawVolume(dbs[0], 75);
    drawVolume(dbs[1], 225);
    context.fillStyle = `rgb(0,0,0)`;

    context.translate(10, 100);
    context.fillText(`playbackBeat: ${playbackBeat}`, 0, 0);
    if (seq) {
      context.translate(0, 25);
      context.fillText(`num active beats: ${getActiveBeats(seq).length}`, 0, 0);
    }

    if (currentTransformState) {
      context.translate(0, 25);
      displayJSON(currentTransformState, context);
    }

    window.requestAnimationFrame(updateMeter);
  };

  updateMeter();
}

////////////////////////////////// Loop functions ///////////////////////////////

function loop(time: number): void {
  if (seq[playbackBeat]) {
    playCurrentNote(seq[playbackBeat] as Note, time);
  }

  currentTransformState = getNextTransform({
    _transformState: currentTransformState,
    _seq: seq
  });

  if (playbackBeat === 0) {
    if (
      currentTransformState &&
      currentTransformState.cyclesUntilNextAction === 0
    ) {
      const { _seq, _transformState } = applyTransforms({
        _transformState: currentTransformState,
        _seq: seq
      });
      seq = _seq;
      _transformState.cyclesUntilNextAction = choose([1, 2, 3]);
      currentTransformState = _transformState;
    } else if (currentTransformState) {
      currentTransformState.cyclesUntilNextAction -= 1;
    }
  }

  playbackBeat = (playbackBeat + 1) % seq.length;
}

function playCurrentNote(note: Note, time: number): void {
  const panner = new Tone.Panner(note.pan).connect(masterChannel);
  const synth = new Tone.Synth({
    volume: -25,
    oscillator: {
      type: "sine"
    },
    envelope: {
      attackCurve: "exponential",
      attack: 0.01,
      decay: 0.3,
      sustain: 0.95,
      release: 5,
      releaseCurve: "exponential"
    },
    onsilence: (instrument: Tone.Synth) => {
      instrument.dispose();
      panner.dispose();
    }
  });
  synth.connect(panner);
  synth.triggerAttackRelease(note.note, "16n", time);
}

////////////////////////////////

function getNextTransform({
  _transformState,
  _seq
}: {
  _transformState: TransformState | null;
  _seq: Sequence;
}): TransformState | null {
  if (!_transformState || _transformState.isComplete) {
    return chooseTransform({ _seq });
  }

  return _transformState;
}

function applyTransforms({
  _transformState,
  _seq
}: {
  _transformState: TransformState;
  _seq: Sequence;
}): {
  _seq: Sequence;
  _transformState: TransformState;
} {
  if (transforms[_transformState.transform]) {
    return transforms[_transformState.transform].transform({
      _transformState,
      _seq
    });
  } else {
    throw new Error("transform not found");
  }
}
