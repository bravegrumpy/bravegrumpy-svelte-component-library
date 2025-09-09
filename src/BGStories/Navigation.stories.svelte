<script module>
	import '../app.css';
	import '$lib/styles.css';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Navigation from '$lib/Navigation.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Bravegrumpy/Navigation',
		component: Navigation,
		tags: ['autodocs'],
		argTypes: {
			slug: { control: 'text' },
			reversed: { control: 'boolean' },
			class: { control: 'text' },
			theme: { control: 'text' }
		},
		args: {},
		parameters: {
			layout: 'centered',
			backgrounds: {
				values: [
					{ name: 'light', value: '#270d3e' },
					{ name: 'dark', value: '#d1dcff' },
					{ name: 'reversed-light', value: '#d2c8ff' },
					{ name: 'reversed-dark', value: '#270d3e' }
				]
			}
		}
	});
</script>

<Story
	name="DefaultLight"
	args={{
		slug: '/about',
		reversed: false
	}}
	parameters={{
		backgrounds: { default: 'light' }
	}}
/>
<Story
	name="DefaultDark"
	args={{
		slug: '/about',
		reversed: false,
		theme: 'dark'
	}}
	parameters={{
		backgrounds: { default: 'dark' }
	}}
/>
<Story
	name="ReversedLight"
	args={{
		slug: '/about',
		reversed: true
	}}
	parameters={{
		backgrounds: { default: 'reversed-light' }
	}}
/>
<Story
	name="ReversedDark"
	args={{
		slug: '/about',
		reversed: true,
		theme: 'dark'
	}}
	parameters={{
		backgrounds: { default: 'reversed-dark' }
	}}
/>
