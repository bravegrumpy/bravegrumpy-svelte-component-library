<script module>
	import '../app.css';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import NavButton from '$lib/NavButton.svelte';
	import { fn } from '@storybook/test';

	const { Story } = defineMeta({
		title: 'Bravegrumpy/NavButton',
		component: NavButton,
		tags: ['autodocs'],
		argTypes: {
			href: { control: 'text' },
			text: { control: 'text' },
			slug: { control: 'text' },
			reversed: { control: 'boolean' },
			class: { control: 'text' }
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
		text: 'Light',
		href: '/',
		slug: '/other',
		reversed: false
	}}
	parameters={{
		backgrounds: { default: 'light' }
	}}
/>
<Story
	name="DefaultDark"
	args={{ text: 'Dark', href: '/', slug: '/other', reversed: false, class: 'dark' }}
	parameters={{ backrounds: { default: 'dark' } }}
/>
<Story
	name="ActiveDefaultLight"
	args={{ text: 'Active Light', href: '/', slug: '/', reversed: false }}
	parameters={{ backrounds: { default: 'light' } }}
/>
<Story
	name="ActiveDefaultDark"
	args={{ text: 'Active Dark', href: '/', slug: '/', reversed: false, class: 'dark' }}
	parameters={{ backrounds: { default: 'dark' } }}
/>
<Story
	name="ReversedDefaultLight"
	args={{ text: 'Reversed Default Light', href: '/', slug: '/other', reversed: true }}
	parameters={{ backrounds: { default: 'reversed-light' } }}
/>
<Story
	name="ReversedDefaultDark"
	args={{
		text: 'Reversed Default Dark',
		href: '/',
		slug: '/other',
		reversed: true,
		class: 'dark'
	}}
	parameters={{ backrounds: { default: 'reversed-dark' } }}
/>
<Story
	name="ReversedActiveLight"
	args={{ text: 'Reversed Active Light', href: '/', slug: '/', reversed: true }}
	parameters={{ backrounds: { default: 'reversed-light' } }}
/>
<Story
	name="ReversedActiveDark"
	args={{ text: 'Reversed Active Dark', href: '/', slug: '/', reversed: true, class: 'dark' }}
	parameters={{ backrounds: { default: 'reversed-dark' } }}
/>
