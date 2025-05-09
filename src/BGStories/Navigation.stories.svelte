<script module>
	import '../app.css';
	import '$lib/styles.css';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Navigation from '$lib/Navigation.svelte';
	import { fn } from '@storybook/test';

	const { Story } = defineMeta({
		title: 'Bravegrumpy/Navigation',
		component: Navigation,
		tags: ['autodocs'],
		argTypes: {
			slug: { control: 'text' },
			reversed: { control: 'boolean' },
			class: {
				control: {
					type: 'select',
					options: ['dark', 'light']
				}
			}
		},
		args: {}
	});
</script>

<Story name="DefaultLight" args={{ slug: '/about', reversed: false }} />
<Story name="DefaultDark" args={{ slug: '/about', reversed: false, class: 'dark' }} />
<Story name="ReversedLight" args={{ slug: '/about', reversed: true }} />
<Story name="ReversedDark" args={{ slug: '/about', reversed: true, class: 'dark' }} />
