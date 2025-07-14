function* getRandomSeed(max: number) {
	for (let counter = 0; counter < max; counter++) {
		const bytes = crypto.getRandomValues(new Uint8Array(24));
		yield Buffer.copyBytesFrom(bytes).toString('base64');
	}
}

const createGF2048 = (): readonly number[] => {
	const mod = 0b100000000101;
	const list: number[] = [];
	let n = 1;

	for (let i = 0; i < 2047; i++) {
		list.push(n);
		const next = n << 1;
		n = next >>> 11 !== 0 ? next ^ mod : next;
	}
	return list;
};

export const load = async () => {
	const seedGen = getRandomSeed(2);
	const seeds: readonly string[] = Array.from(seedGen);

	return {
		seeds,
		gf2048List: createGF2048()
	};
};
