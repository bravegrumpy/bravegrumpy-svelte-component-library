<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PageTitle from '$lib/PageTitle.svelte';

	const { Story } = defineMeta({
		title: 'Bravegrumpy/PageTitle',
		component: PageTitle,
		tags: ['autodocs'],
		argTypes: {
			pageTitle: {
				control: 'text',
				description: 'Page Title'
			},
			pageSubtitle: {
				control: 'text',
				description: 'Smaller text below the title'
			}
		},
		args: {
			pageTitle: 'Hello World',
			pageSubtitle: 'Subtitle'
		}
	});
</script>

<Story name="Default" />
