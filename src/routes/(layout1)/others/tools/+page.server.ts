const createGF2048 = () => {
	const mod = 0b100000000101;
	const limit = 2 ** 11 - 1;
	const list: number[] = [];
	let n = 1;

	for (let i = 0; i < limit; i++) {
		list.push(n);
		const next = n << 1;
		n = next >>> 11 !== 0 ? next ^ mod : next;
	}
	return list;
};

export const load = async () => {
	const seeds = [crypto.randomUUID(), crypto.randomUUID()] as const;

	return {
		seeds,
		gf2048List: createGF2048()
	};
};
