import * as Tone from "tone";
import { choose, deepChoose, randomArray } from "./utils";

/////////////// sequence state //////////////////

const notePool = ["A", "B", "C", "D", "E", "F", "G", "A", "F#", "C#"];
let seq;
let currIdx;
let lastAdditionIdx;
let numReps = 3;

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
  seq = new Array(10);
  seq[0] = { note: getNextNote(), pan: getNextPan() };
  currIdx = 0;
  lastAdditionIdx = 0;
  Tone.Transport.start();
});

document.querySelector("#stop")?.addEventListener("click", async () => {
  Tone.Transport.stop();
});

///////////////////////// Setup //////////////////////////

async function setup() {
  await Tone.start();
  Tone.Transport.bpm = 90;
  masterChannel = new Tone.Channel({ channelCount: 2 });
  masterChannel.toDestination();
  setupMeter();
  // create the sequencer loop
  new Tone.Loop(loop, "8n").start(0);
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
    context.fillStyle = `rgb(0,0)`;
    context.fillText(amps, x + 50, 50);
  };

  const updateMeter = () => {
    const dbs = meter.map((m) => m.getValue());
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = `rgb(0,0,255,0.25)`;
    context.fillRect(0, 0, canvas.width, canvas.height);
    drawVolume(dbs[0], 75);
    drawVolume(dbs[1], 225);

    window.requestAnimationFrame(updateMeter);
  };

  updateMeter();
}

////////////////////////////////// Loop functions ///////////////////////////////

function loop(time) {
  if (seq[currIdx]) {
    playCurrentNote(seq[currIdx], time);
  }

  currIdx = (currIdx + 1) % seq.length;
  if (currIdx === 0) {
    console.log(numReps);
    if (numReps === 0) {
      const additionIdx = (lastAdditionIdx + 7) % seq.length;
      const note = getNextNote(seq[lastAdditionIdx]?.note);
      seq[additionIdx] = note
        ? {
            note,
            pan: getNextPan()
          }
        : null;
      lastAdditionIdx = additionIdx;
      numReps = choose([1, 2, 3]);
    } else {
      numReps -= 1;
    }
  }
}

function playCurrentNote(note, time) {
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
    }
  });
  const panner = new Tone.Panner(note.pan).connect(masterChannel);
  synth.connect(panner);
  synth.triggerAttackRelease(note.note, "16n", time);
}

function getNextNote(prevNote) {
  if (notePool.length === 0) return undefined;
  const chroma = deepChoose(notePool);
  if (!prevNote) return chroma + 3;
  const prevOctave = Number(prevNote.substring(prevNote.length - 1));

  console.log({ prevOctave });
  if (
    Tone.Frequency(chroma + prevOctave).toMidi() <
    Tone.Frequency(prevNote).toMidi()
  ) {
    console.log(chroma + Math.min(prevOctave + 1, 6));
    return chroma + Math.min(prevOctave + 1, 6);
  } else {
    console.log(chroma + prevOctave);
    return chroma + prevOctave;
  }
}

function getNextPan(centroidBias = 1) {
  const pan = -1 + Math.pow(Math.random(), centroidBias) * 2;
  return pan;
}
