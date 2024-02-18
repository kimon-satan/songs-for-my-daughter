import * as Tone from "tone";
import { choose, deepChoose, randomArray } from "./utils";

const polySynth = new Tone.PolySynth(Tone.Synth, {
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
}).toDestination();

const notePool = ["A", "B", "C", "D", "E", "F", "G", "A", "F#", "C#"];
const seq = [getNextNote()];
console.log(seq);

let currIdx = 0;
let lastAdditionIdx = 0;
let numReps = 4;
let isAudioContextStarted;

document.querySelector("#start-audio").addEventListener("click", async () => {
  await Tone.start();
  alert("Tone ready");
  const matches = document.querySelectorAll(".control-button");
  matches.forEach((m) => (m.disabled = false));
  document.querySelector("#start-audio").disabled = true;
});

document.querySelector("#start")?.addEventListener("click", async () => {
  if (!isAudioContextStarted) {
    await Tone.start();
    isAudioContextStarted = true;
    const loop = new Tone.Loop((time) => {
      if (seq[currIdx]) {
        polySynth.triggerAttackRelease(seq[currIdx], "16n", time);
      }
      currIdx = (currIdx + 1) % 10;
      if (currIdx === 0) {
        if (numReps === 0) {
          const additionIdx = (lastAdditionIdx + 7) % 10;
          seq[additionIdx] = getNextNote(seq[lastAdditionIdx]);
          lastAdditionIdx = additionIdx;
          numReps = choose([1, 2, 3]);
        } else {
          numReps -= 1;
        }
      }
    }, "8n").start(0);
    Tone.Transport.bpm = 90;
  }
  Tone.Transport.start();
});

document.querySelector("#stop")?.addEventListener("click", async () => {
  Tone.Transport.stop();
});

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
