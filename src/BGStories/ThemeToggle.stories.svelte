<script module>
	import '../app.css';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import ThemeToggle from '$lib/ThemeToggle.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Bravegrumpy/ThemeToggle',
		globals: {
			background: { 
				value: 'light' 
			}
		},
		component: ThemeToggle,
		tags: ['autodocs'],
		argTypes: {},
		args: {},
		parameters: {
			backgrounds: {
				options: {
					light: { name: 'light', value: '#d2c8ff'},
					dark: { name: 'dark', value: '#270d3e'}
				},
			}
		}
	});
</script>

<Story name="Default" />
