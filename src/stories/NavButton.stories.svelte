<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import NavButton from '$lib/NavButton.svelte';
	import { fn } from 'storybook/test';

	const { Story } = defineMeta({
		title: 'Bravegrumpy/NavButton',
		component: NavButton,
		tags: ['autodocs'],
		globals: {
			theme: 'light'
		},
		argTypes: {
			href: { control: 'text' },
			text: { control: 'text' },
			slug: { control: 'text' },
			reversed: { control: 'boolean' },
			class: {
				control: 'text',
				description:
					'Appended to the anchor classes. In this documentation, siumulating class based dark-mode.'
			},
			baseClass: {
				control: 'text',
				description: 'Overrides default classes applied to component'
			},
			defaultLight: {
				control: 'text',
				description: 'The default light color scheme as set of tailwind classes.'
			}
		},
		args: {},
		parameters: {
			layout: 'centered',
			backgrounds: {
				options: {
					light: { name: 'light', value: '#270d3e' },
					dark: { name: 'dark', value: '#d1dcff' },
					reversedLight: { name: 'reversedLight', value: '#d2c8ff' },
					reversedDark: { name: 'reversedDark', value: '#270d3e' }
				}
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
	globals={{
		backgrounds: {
			value: 'light'
		}
	}}
/>
<Story
	name="DefaultDark"
	args={{ text: 'Dark', href: '/', slug: '/other', reversed: false, class: 'dark' }}
	globals={{
		backgrounds: {
			value: 'dark'
		}
	}}
/>
<Story
	name="ActiveDefaultLight"
	args={{ text: 'Active Light', href: '/', slug: '/', reversed: false }}
	globals={{
		backgrounds: {
			value: 'light'
		}
	}}
/>
<Story
	name="ActiveDefaultDark"
	args={{ text: 'Active Dark', href: '/', slug: '/', reversed: false, class: 'dark' }}
	globals={{
		backgrounds: {
			value: 'dark'
		}
	}}
/>
<Story
	name="ReversedDefaultLight"
	args={{ text: 'Reversed Default Light', href: '/', slug: '/other', reversed: true }}
	globals={{
		backgrounds: {
			value: 'reversedLight'
		}
	}}
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
	globals={{
		backgrounds: {
			value: 'reversedDark'
		}
	}}
/>
<Story
	name="ReversedActiveLight"
	args={{ text: 'Reversed Active Light', href: '/', slug: '/', reversed: true }}
	globals={{
		backgrounds: {
			value: 'reversedLight'
		}
	}}
/>
<Story
	name="ReversedActiveDark"
	args={{ text: 'Reversed Active Dark', href: '/', slug: '/', reversed: true, class: 'dark' }}
	globals={{
		backgrounds: {
			value: 'reversedDark'
		}
	}}
/>
