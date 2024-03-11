import {
  activateBeatsModulo,
  initActivateBeatsModulo
} from "./activateBeatsModulo";
import {
  activateMultipleBeats,
  initActivateMultipleBeats
} from "./activateMultipleBeats";
import {
  initReplaceBeatsModulo,
  replaceBeatsModulo
} from "./replaceBeatsModulo";

import {
  silenceBeatsModulo,
  initSilenceBeatsModulo
} from "./silenceBeatsModulo";
import {
  initSilenceMultipleBeats,
  silenceMultipleBeats
} from "./silenceMultipleBeats";

export const transforms = {
  activateBeatsModulo: {
    init: initActivateBeatsModulo,
    transform: activateBeatsModulo
  },
  replaceBeatsModulo: {
    init: initReplaceBeatsModulo,
    transform: replaceBeatsModulo
  },
  silenceBeatsModulo: {
    init: initSilenceBeatsModulo,
    transform: silenceBeatsModulo
  },
  activateMultipleBeats: {
    init: initActivateMultipleBeats,
    transform: activateMultipleBeats
  },
  silenceMultipleBeats: {
    init: initSilenceMultipleBeats,
    transform: silenceMultipleBeats
  }
};
