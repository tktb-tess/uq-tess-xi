const getUUID = function* (max: number) {
	for (let counter = 0; counter < max; counter++) {
		yield crypto.randomUUID();
	}
};

const createGF2048 = () => {
	const mod = 0b100000000101;
	const maps: [number | null, number][] = [];
	let n = 1;
	maps.push([null, 0]);

	for (let i = 0; i < 2047; i++) {
		maps.push([i, n]);
		const next = n << 1;
		n = next >>> 11 !== 0 ? next ^ mod : next;
	}
	const exps: readonly number[] = maps.slice(1).map(([, i]) => i);
	const maps2 = maps.toSorted(([, a], [, b]) => {
		return a - b;
	});
	const logs: readonly (number | null)[] = maps2.map(([i]) => i);
	return [exps, logs] as const;
};

export const load = async () => {
	const seeds: readonly string[] = Array.from(getUUID(4));
	const [exps, logs] = createGF2048();

	return {
		seeds,
		exps,
		logs
	};
};
