import type { LayoutServerLoad } from './$types.js';
import type { ref } from '$lib/Navigation.svelte';

export const load: LayoutServerLoad = async () => {
	const subRoutes: ref[] = [
		{ id: 'exproot', href: '/experiments', text: 'Playground' },
		{ id: 'one', href: '/experiments/one', text: 'First' },
		{ id: 'two', href: '/experiments/two', text: 'Second' }
	];
	return {
		subRoutes
	};
};
