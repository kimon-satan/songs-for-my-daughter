export function getChromaAtIndex({ _seq, index }) {
  const n = _seq[index].note;
  if (!n) {
    return null;
  }
  return n.substring(0, n.length - 1);
}

export function getOctaveAtIndex({ _seq, index }) {
  const n = _seq[index].note;
  if (!n) {
    return null;
  }
  return Number(n.substring(n.length - 1));
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
