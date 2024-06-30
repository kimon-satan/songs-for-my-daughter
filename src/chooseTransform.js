import { transforms } from "./transforms/transforms";
import { choose, getActiveBeats } from "./utils";

export function chooseTransform({ _seq }) {
  // choose next transform based on number of beats
  const transform = (() => {
    const numBeats = getActiveBeats(_seq).length;
    switch (true) {
      case numBeats <= 5:
        return "activateBeatsModulo";
      case numBeats <= 10:
        return choose(["activateBeatsModulo", "activateMultipleBeats"]);
      case numBeats <= 15:
        return choose(["replaceBeatsModulo", "silenceBeatsModulo"]);
      default:
        return choose([
          "replaceBeatsModulo",
          "replaceMultipleBeats",
          "silenceMultipleBeats"
        ]);
    }
  })();

  return transforms[transform].init({ _seq });
}
