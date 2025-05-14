<script module>
	import '../app.css';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Logo from '$lib/Logo.svelte';
	import { fn } from '@storybook/test';

	const { Story } = defineMeta({
		title: 'Bravegrumpy/Logo',
		component: Logo,
		tags: ['autodocs'],
		argTypes: {
			class: { control: 'text' }
		},
		args: {},
		parameters: {
			layout: 'centered',
			backgrounds: {
				values: [
					{ name: 'light', value: '#d2c8ff' },
					{ name: 'dark', value: '#270d3e' }
				]
			}
		}
	});
</script>

<Story name="Light" parameters={{ backgrounds: { default: 'light' } }} />
<Story name="Dark" args={{ class: 'dark' }} parameters={{ backgrounds: { default: 'dark' } }} />
