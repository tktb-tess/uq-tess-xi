import { json } from '@sveltejs/kit';

const headers = {
	'Content-Type': 'application/json'
} as const;

export const GET = () => {
	return json({ message: 'fire!' }, { headers });
};
