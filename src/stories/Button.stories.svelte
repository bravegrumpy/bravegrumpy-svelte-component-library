<script module>
	import '../app.css';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Button from '$lib/Button.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Bravegrumpy/Button',
		component: Button,
		globals: {
			backgrounds: {
				value: 'light'
			}
		},
		tags: ['autodocs'],
		argTypes: {
			icon: { control: 'text' },
			onclick: { control: 'text' },
			class: { control: 'text' }
		},
		args: {
			icon: 'hugeicons:circle',
			onclick: fn()
		}
	});
</script>

<Story name="Light" />

<Story name="Dark" args={{ class: 'dark' }} globals={{ backgrounds: { value: 'dark' } }} />
