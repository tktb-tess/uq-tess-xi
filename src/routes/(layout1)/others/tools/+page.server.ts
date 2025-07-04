const getRandomSeed = () => {
	const bytes = crypto.getRandomValues(new Uint8Array(32));
	return Buffer.copyBytesFrom(bytes).toString('base64');
};

export const load = () => {
	const seeds = [getRandomSeed(), getRandomSeed()] as const;

	return {
		seeds
	};
};
