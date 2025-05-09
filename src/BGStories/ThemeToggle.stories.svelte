<script module>
	import '../app.css';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ThemeToggle from '$lib/ThemeToggle.svelte';
	import { fn } from '@storybook/test';

	const { Story } = defineMeta({
		title: 'Bravegrumpy/ThemeToggle',
		component: ThemeToggle,
		tags: ['autodocs'],
		argTypes: {},
		args: {}
	});
</script>

<Story name="Default" />
