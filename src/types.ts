import * as Tone from "tone";

export interface Note {
  note: string;
  pan: number;
}

export type Sequence = (Note | undefined)[];

export interface TransformState {
  transform: string;
  isComplete: boolean;
  cyclesUntilNextAction: number;
  [key: string]: any;
}

export interface Transform {
  init: (args: { _seq: Sequence } & Record<string, any>) => TransformState;
  transform: (args: { _transformState: TransformState; _seq: Sequence }) => {
    _seq: Sequence;
    _transformState: TransformState;
  };
}

export interface TransformMap {
  [key: string]: Transform;
}

export interface SequenceFixtures {
  [key: string]: () => Sequence;
}
