import { createClient } from 'redis';
import { REDIS_URL } from '$env/static/private';
import { redisKeys, type Result, type SwadeshList } from '$lib/types/decl';
export const prerender = false;

export const load = async (): Promise<Result<SwadeshList>> => {
	try {
		const client = await createClient({ url: REDIS_URL }).connect();

		const value = await client.get(redisKeys.swadeshVae).then((swa) => {
			if (!swa) throw Error('failed to load swadeshlist-vae from redis');
			
			return JSON.parse(swa) as string[][];
		});

		return {
			success: true,
			result: {
				value
			}
		};
	} catch (e) {
		if (e instanceof Error) {
			const { message, stack } = e;
			return {
				success: false,
				message,
				stack
			};
            
		} else {
			return {
				success: false,
				message: 'unidentified error'
			};
		}
	}
};
