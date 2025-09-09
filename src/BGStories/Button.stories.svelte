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
				value: "light"
			}
		},
		tags: ['autodocs'],
		argTypes: {
			icon: { control: 'text' },
		},
		args: {
			icon: 'hugeicons:circle',
		}
	});
</script>

<Story name="Default" />
