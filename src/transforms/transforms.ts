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
  initReplaceMultipleBeats,
  replaceMultipleBeats
} from "./replaceMultipleBeats";

import {
  silenceBeatsModulo,
  initSilenceBeatsModulo
} from "./silenceBeatsModulo";
import {
  initSilenceMultipleBeats,
  silenceMultipleBeats
} from "./silenceMultipleBeats";
import { TransformMap } from "../types";

export const transforms: TransformMap = {
  activateBeatsModulo: {
    init: initActivateBeatsModulo,
    transform: activateBeatsModulo as any
  },
  replaceBeatsModulo: {
    init: initReplaceBeatsModulo,
    transform: replaceBeatsModulo as any
  },
  silenceBeatsModulo: {
    init: initSilenceBeatsModulo,
    transform: silenceBeatsModulo as any
  },
  activateMultipleBeats: {
    init: initActivateMultipleBeats,
    transform: activateMultipleBeats as any
  },
  replaceMultipleBeats: {
    init: initReplaceMultipleBeats,
    transform: replaceMultipleBeats as any
  },
  silenceMultipleBeats: {
    init: initSilenceMultipleBeats,
    transform: silenceMultipleBeats as any
  }
};
