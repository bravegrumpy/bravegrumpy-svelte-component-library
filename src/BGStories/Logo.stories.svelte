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
			class: {
				control: {
					type: 'select',
					options: ['dark', '']
				}
			}
		},
		args: {}
	});
</script>

<Story name="Light" args={{ class: '' }} />
<Story name="Dark" args={{ class: 'dark' }} />
