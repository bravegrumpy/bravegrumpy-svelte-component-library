import type { LayoutServerLoad } from './$types.js';
import type { ref } from '$lib/Navigation.svelte';

export const load: LayoutServerLoad = async () => {
	const routes: ref[] = [
		{ id: 'home', href: '/', text: 'Home' },
		{ id: 'about', href: '/about', text: 'About' },
		{ id: 'experiments', href: '/experiments', text: 'Playground' }
	];
	const pageTitle = 'Page Title';
	const pageSubtitle = 'Page Subtitle';

	return {
		routes,
		pageTitle,
		pageSubtitle
	};
};
