export function getFirstActiveBeat(_seq) {
  if (!_seq) return null;
  const b = _seq.findIndex((v) => v !== undefined);
  return b === -1 ? null : b;
}

export function getActiveBeats(_seq) {
  return _seq.filter((b) => b !== undefined);
}

export function getChromaAtIndex({ _seq, index }) {
  const n = getNoteAtIndex({ _seq, index });
  return getChromaFromNote(n);
}

export function getOctaveAtIndex({ _seq, index }) {
  const n = getNoteAtIndex({ _seq, index });
  return getOctaveFromNote(n);
}

export function getOctaveFromNote(note) {
  return Number(note.substring(note.length - 1));
}

export function getChromaFromNote(note) {
  return note.substring(0, note.length - 1);
}

export function getNoteAtIndex({ _seq, index }) {
  return _seq[index]?.note || null;
}

export function choose(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function deepChoose(arr) {
  return arr.splice(Math.floor(Math.random() * arr.length), 1);
}

export function normalizeSum(inputArray) {
  const sum = inputArray.reduce((prev, curr) => prev + curr);
  return inputArray.map((n) => n / sum);
}

export function randomArray(numItems, isNormalized) {
  const array = [];
  for (let i = 0; i < numItems; i++) {
    array.push(Math.random());
  }
  return isNormalized ? normalizeSum(array) : array;
}

export function safeParseJson(raw_json) {
  try {
    return JSON.parse(raw_json);
  } catch (e) {
    console.log(e);
    return null;
  }
}

export function displayJSON(obj, context) {
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
