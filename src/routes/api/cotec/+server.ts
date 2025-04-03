import { parseToJSON } from '$lib/modules/fetching';
import { json } from '@sveltejs/kit';

export const GET = async ({ url }) => {
	console.log('receive GET request at /cotec');

	const [metadata, contents] = await parseToJSON();

	const fb = url.searchParams.get('forbidden');

	if (fb) return new Response('!', { status: 403 });

	const body = { metadata, contents };
	const headers = {
		'Content-Type': 'application/json',
	};

	return json(body, { headers });
};
