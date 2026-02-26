import type { TeamMember } from '$lib/data/team';
import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, fetch }) => {
	const name = params.name;

	const res = await fetch(`/api/team?name=${name}`);

	if (!res.ok) {
		throw redirect(302, '/');
	}

	const member: TeamMember = await res.json();

	return {
		member
	};
};
