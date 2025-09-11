<script module>
	// import '../app.css';
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Logo from '$lib/Logo.svelte';
	import { fn } from 'storybook/test';
	import LogoDecorator from './LogoDecorator.svelte';

	const { Story } = defineMeta({
		title: 'Bravegrumpy/Logo',
		component: Logo,
		// @ts-ignore
		decorators: [() => LogoDecorator],
		tags: ['autodocs'],
		argTypes: {
			class: {
				control: 'text',
				description: 'Tailwind class appended to the container `<div>`'
			},
			logo: {
				control: 'text',
				description: 'Text displayed in large lettering'
			},
			subtitle: {
				control: 'text',
				description: 'text displayed in small lettering'
			},
			art: {
				control: 'object',
				description: 'An input that can allow you to specify a different image.'
			}
		},
		args: {
			class: '',
			logo: 'BraveGrumpy',
			subtitle: 'Welcome to my chaotic castle of curious creations. I hope find some cool stuff.',
			art: null
		},
		parameters: {
			layout: 'centered',
			backgrounds: {
				options: {
					light: { name: 'Light', value: '#d2c8ff' },
					dark: { name: 'Dark', value: '#270d3e' }
				}
			}
		}
	});
</script>

<Story name="Default" />

{#snippet inputLogo()}
	<span
		class="bg:icon-[hugeicons--test-tube-03] bg:size-15 bg:bg-affair-800 bg:dark:bg-bravegrumpy-logoGreen bg:rotate-45"
	></span>
{/snippet}

<Story name="Component Logo" args={{ art: { component: inputLogo } }} />

<Story
	name="Image Props Logo"
	args={{
		art: {
			img: {
				src: 'https://cdn.bravegrumpy.com/AO3Styles/images/favicon.png'
			}
		}
	}}
/>
