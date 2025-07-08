const getRandomSeed = () => {
	const bytes = crypto.getRandomValues(new Uint8Array(24));
	return Buffer.copyBytesFrom(bytes).toString('base64');
};

const createGF2048 = () => {
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
	const seeds = [getRandomSeed(), getRandomSeed()] as const;

	return {
		seeds,
		gf2048List: createGF2048()
	};
};
