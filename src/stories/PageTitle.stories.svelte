<script module>
	import '../app.css';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import PageTitle from '$lib/PageTitle.svelte';

	const { Story } = defineMeta({
		title: 'Bravegrumpy/PageTitle',
		component: PageTitle,
		tags: ['autodocs']
	});
</script>

<Story name="Default" />
