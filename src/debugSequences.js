import { initFillSequence, fillSequence } from "./transforms";

export const debugFillSequence = () => {
  const seq = new Array(20);
  const currentTransformState = initFillSequence();
  for (let i = 0; i < 20; i += 2) {
    seq[i] = {};
  }

  return seq;
};
