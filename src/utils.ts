import * as Tone from "tone";
import { Note, Sequence } from "./types";

export function calculateChromaDistance(
  chromaA: string,
  chromaB: string
): number {
  const midiA1 = Tone.Frequency(chromaA + "1").toMidi();
  const midiB1 = Tone.Frequency(chromaB + "1").toMidi();
  const midiA2 = Tone.Frequency(chromaA + "2").toMidi();
  const midiB2 = Tone.Frequency(chromaB + "2").toMidi();

  return Math.min(
    Math.abs(midiA1 - midiB1),
    Math.abs(midiA1 - midiB2),
    Math.abs(midiA2 - midiB1)
  );
}

export function getFirstActiveBeat(_seq: Sequence): number | null {
  if (!_seq) return null;
  const b = _seq.findIndex((v) => v !== undefined);
  return b === -1 ? null : b;
}

export function getActiveBeats(_seq: Sequence): Note[] {
  return _seq.filter((b): b is Note => b !== undefined);
}

export function getActiveIndexes({ _seq }: { _seq: Sequence }): number[] {
  return _seq.reduce<number[]>((prev, v, i) => (v ? [...prev, i] : prev), []);
}

export function getNonActiveIndexes({ _seq }: { _seq: Sequence }): number[] {
  return _seq.reduce<number[]>((prev, v, i) => (v ? prev : [...prev, i]), []);
}

export function getNearestActiveBeat({
  _seq,
  index
}: {
  _seq: Sequence;
  index: number;
}): number {
  const deltas = _seq.map(
    (val, i) => val && Math.min(Math.abs(index - i), _seq.length - index)
  );

  let lowestDelta = 9999;
  let nearestActiveBeat = -1;
  deltas.forEach((d, i) => {
    if (d !== undefined && d < lowestDelta) {
      nearestActiveBeat = i;
      lowestDelta = d;
    }
  });
  return nearestActiveBeat;
}

export function getChromaAtIndex({
  _seq,
  index
}: {
  _seq: Sequence;
  index: number;
}): string | null {
  const n = getNoteAtIndex({ _seq, index });
  return getChromaFromNote(n);
}

export function getOctaveAtIndex({
  _seq,
  index
}: {
  _seq: Sequence;
  index: number;
}): number | null {
  const n = getNoteAtIndex({ _seq, index });
  return n ? getOctaveFromNote(n) : null;
}

export function getOctaveFromNote(note: string): number {
  return Number(note.substring(note.length - 1));
}

export function getChromaFromNote(note: string | null): string | null {
  return note ? note.substring(0, note.length - 1) : null;
}

export function getNoteAtIndex({
  _seq,
  index
}: {
  _seq: Sequence;
  index: number;
}): string | null {
  return _seq[index]?.note || null;
}

export function choose<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function deepChoose<T>(arr: T[]): T {
  return arr.splice(Math.floor(Math.random() * arr.length), 1)[0];
}

export function normalizeSum(inputArray: number[]): number[] {
  const sum = inputArray.reduce((prev, curr) => prev + curr);
  return inputArray.map((n) => n / sum);
}

export function randomArray(numItems: number, isNormalized: boolean): number[] {
  const array: number[] = [];
  for (let i = 0; i < numItems; i++) {
    array.push(Math.random());
  }
  return isNormalized ? normalizeSum(array) : array;
}

export function safeParseJson(raw_json: string): any | null {
  try {
    return JSON.parse(raw_json);
  } catch (e) {
    console.log(e);
    return null;
  }
}

export function displayJSON(
  obj: Record<string, any>,
  context: CanvasRenderingContext2D
): void {
  Object.keys(obj).forEach((k) => {
    if (typeof obj[k] !== "object") {
      context.fillText(`${k}: ${obj[k]}`, 0, 0);
      context.translate(0, 14);
    } else {
      context.fillText(`${k}: ${JSON.stringify(obj[k])}`, 0, 0);
      context.translate(0, 14);
    }
  });
}

export function shuffle<T>(array: T[]): T[] {
  const a = [...array];
  let currentIndex = array.length;
  let randomIndex: number;

  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [a[currentIndex], a[randomIndex]] = [a[randomIndex], a[currentIndex]];
  }

  return a;
}
