<script module>
	import '../app.css';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Logo from '$lib/Logo.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Bravegrumpy/Logo',
		component: Logo,
		globals: {
			backgrounds: {
				value: 'light'
			}
		},
		tags: ['autodocs'],
		argTypes: {
			class: { control: 'text' }
		},
		args: {},
		parameters: {
			layout: 'centered',
			backgrounds: {
				options: {
					light: { name: 'light', value: '#d2c8ff' },
					dark: { name: 'dark', value: '#270d3e' },
				},
			},
		},
	});
</script>

<Story name="Light" />

<Story 
	name="Dark" 
	args={{ class: 'dark' }} 
	globals={{
		backgrounds: { value: "dark"}
	}}
/>
