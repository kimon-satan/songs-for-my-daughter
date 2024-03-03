import {
  activateBeatsModulo,
  initActivateBeatsModulo
} from "./activateBeatsModulo";

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
  }
};
