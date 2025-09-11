<script module>
	// import '../app.css';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Navigation from '$lib/Navigation.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Bravegrumpy/Navigation',
		component: Navigation,
		globals: {
			backgrounds: { value: 'light' }
		},
		tags: ['autodocs'],
		argTypes: {
			slug: { control: 'text' },
			reversed: { control: 'boolean' },
			class: { control: 'text' },
			theme: { control: 'text' }
		},
		args: {
			links: [
				{
					id: 'home',
					href: '/',
					text: 'Home'
				},
				{
					id: 'about',
					href: '/about',
					text: 'About'
				},
				{
					id: 'contact-me',
					href: '/contact',
					text: 'Contact'
				}
			]
		},
		parameters: {
			layout: 'right',
			backgrounds: {
				options: {
					light: { name: 'light', value: '#270d3e' },
					dark: { name: 'dark', value: '#d1dcff' },
					reversedLight: { name: 'reversed-light', value: '#d2c8ff' },
					reversedDark: { name: 'reversed-dark', value: '#270d3e' }
				}
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
/>
<Story
	name="DefaultDark"
	args={{
		slug: '/about',
		reversed: false,
		theme: 'dark'
	}}
	globals={{
		backgrounds: {
			value: 'dark'
		}
	}}
/>
<Story
	name="ReversedLight"
	args={{
		slug: '/about',
		reversed: true
	}}
	globals={{
		backgrounds: { value: 'reversedLight' }
	}}
/>
<Story
	name="ReversedDark"
	args={{
		slug: '/about',
		reversed: true,
		theme: 'dark'
	}}
	globals={{
		backgrounds: { value: 'reversedDark' }
	}}
/>
