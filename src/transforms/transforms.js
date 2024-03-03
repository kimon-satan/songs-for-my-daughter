import {
  activateBeatsModulo,
  initActivateBeatsModulo
} from "./activateBeatsModulo";
import {
  activateMultipleBeats,
  initActivateMultipleBeats
} from "./activateMultipleBeats";

import {
  silenceBeatsModulo,
  initSilenceBeatsModulo
} from "./silenceBeatsModulo";

export const transforms = {
  activateBeatsModulo: {
    init: initActivateBeatsModulo,
    transform: activateBeatsModulo
  },
  silenceBeatsModulo: {
    init: initSilenceBeatsModulo,
    transform: silenceBeatsModulo
  },
  activateMultipleBeats: {
    init: initActivateMultipleBeats,
    transform: activateMultipleBeats
  }
};
