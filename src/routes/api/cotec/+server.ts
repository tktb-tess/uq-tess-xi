import { parseToJSON } from '$lib/modules/fetching';

export const GET = async ({ url }) => {
	console.log('receive GET request at /cotec');

	const [metadata, contents] = await parseToJSON();

	const fb = url.searchParams.get('forbidden');

	if (fb) return new Response('!', { status: 403 });

	const body = new Blob([JSON.stringify({ metadata, contents })], { type: 'application/json' });

	return new Response(body);
};
