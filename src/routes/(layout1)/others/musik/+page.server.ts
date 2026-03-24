import type { Asset } from "$app/types";

export interface TrackData {
  readonly path: Asset;
  readonly title: string;
  readonly composer: string;
  readonly description: string;
}

export interface TrackParams extends TrackData {
  currentTime: number;
  ref?: HTMLAudioElement;
  loop: boolean;
  state: 'playing' | 'paused' | 'stopped';
  duration?: number;
}

const trackData: readonly TrackData[] = [
  {
    path: '/audio/wlcm.m4a',
    title: 'Welcome',
    composer: 'Tessyrrhaqt',
    description: 'Psytranceまがいの静かな曲。',
  },
  {
    path: '/audio/clst.m4a',
    title: 'Celeste',
    composer: 'Tessyrrhaqt',
    description: 'Youtubeのエンディングテーマみたいなの作りたいなって思ったので作った短い曲。',
  },
];

export const load = async () => {
  return {
    trackData,
  };
};
