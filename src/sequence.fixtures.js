import { choose } from "./utils";

const chroma = [
  "A",
  "A#",
  "B",
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#"
];
const octaves = [2, 3, 4, 5, 6, 7];

export const sequenceFixtures = {
  allBeatsChromatic: () => {
    const _seq = [];

    for (let i = 0; i < 20; i++) {
      _seq.push({
        note:
          chroma[i % chroma.length] + octaves[Math.floor(i / chroma.length)],
        pan: 0
      });
    }

    return _seq;
  },

  alternateBeatsRandom: () => {
    const _seq = new Array(20);

    for (let i = 0; i < 20; i += 2) {
      _seq[i] = {
        note: choose(chroma) + choose(octaves),
        pan: -1 + Math.random() * 2
      };
    }
    return _seq;
  }
};
