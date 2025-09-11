<script module>
	import '../app.css';
	import '$lib/styles.css';
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
			slug: {
				control: 'text',
				description:
					"Input slug of 'current' page. Include leading slash. For each link, it is compared to the href value passed to the underlying `NavButton` component. It will show as 'active'."
			},
			reversed: {
				control: 'boolean',

				description: 'Controls which of two color schemes are used for the navigation bar'
			},
			class: { control: 'text' },
			className: { control: 'text' },
			navButtonClass: {
				control: 'text',
				description:
					'accepts styling classes to append to the end of the tailwindclasses for the underlying `NavButton` componenet. Does not override the styling of the underlying anchor component. It flows into the class property within `NavButton`, which adds to the pre-set styling'
			}
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
			],
			className: '',
			defaultLight: ''
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
		class: 'dark'
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
		class: 'dark'
	}}
	globals={{
		backgrounds: { value: 'reversedDark' }
	}}
/>
