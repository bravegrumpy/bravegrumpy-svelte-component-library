import type { PageServerLoad } from './$types.d.ts';

export const load: PageServerLoad = async () => {
	return {
		pageTitle: 'Home Page',
		pageSubtitle: 'This is the page subtitle'
	};
};
