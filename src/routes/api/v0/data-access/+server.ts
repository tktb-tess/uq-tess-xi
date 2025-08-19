import { REDIS_URL } from '$env/static/private';
import { redisKeys } from '$lib/types/decl';
import { error, json } from '@sveltejs/kit';
import { createClient } from 'redis';

const headers = {
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': 'https://www.tktb-tess.dev'
} as const;

export const GET = async () => {
	const client = await createClient({ url: REDIS_URL }).connect();

	const tasks = Object.entries(redisKeys).map(async ([key, value]) => {
		const data = await client.get(value);
		if (!data) error(404);
		return [key, JSON.parse(data)] as const;
	});
	const body = await Promise.all(tasks).then((b) => Object.fromEntries(b));

	return json(body, { headers });
};
