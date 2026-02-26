import { json, type RequestHandler } from '@sveltejs/kit';
import { team } from '$lib/data/team';

export const GET: RequestHandler = async ({ url }: { url: URL }) => {
	const name = url.searchParams.get('name');
	console.log('api params name', name);

	if (!name) {
		return json({ error: 'Name is required' }, { status: 400 });
	}

	const member = team.find((m) => m.nick.toLowerCase() === name.toLowerCase());
	console.log('api import team', team);
	console.log('api find member', member);
	if (!member) {
		return json({ error: 'Member not found' }, { status: 404 });
	}

	return json(member);
};
