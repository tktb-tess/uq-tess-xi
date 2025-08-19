import { REDIS_URL } from '$env/static/private';
import RSA from '$lib/modules/rsa.js';
import { redisKeys } from '$lib/types/decl.js';
import { error, json } from '@sveltejs/kit';
import { createClient } from 'redis';

const headers = {
	'Content-Type': 'application/json'
} as const;

export const GET = async ({ request }) => {
	const input = await request.text();
	if (typeof input !== 'string') error(400);

	const client = await createClient({ url: REDIS_URL }).connect();
	
	const rsa = await client.get(redisKeys.rsaKey).then((d) => {
		if (!d) error(404);
		return RSA.parse(d);
	});
	const encrypted = rsa.encrypt(input);

	const body = {
		input,
		encrypted
	} as const;
    
	return json(body, { headers });
};
