export type TrackData = {
	readonly id: string;
	readonly title: string;
	readonly composer: string;
	readonly description: string;
};

export type TrackParams = TrackData & {
	currentTime: number;
	ref?: HTMLAudioElement;
	loop: boolean;
	state: 'playing' | 'paused' | 'stopped';
	duration?: number;
};

export const load = async () => {
	const trackData: ReadonlyArray<TrackData> = [
		{
			id: 'wlcm',
			title: 'Welcome',
			composer: 'Tessyrrhaqt',
			description: 'Psytranceまがいの静かな曲。'
		},
		{
			id: 'clst',
			title: 'Celeste',
			composer: 'Tessyrrhaqt',
			description: 'Youtubeのエンディングテーマみたいなの作りたいなって思ったので作った短い曲。'
		}
	];
	return {
		trackData
	};
};
