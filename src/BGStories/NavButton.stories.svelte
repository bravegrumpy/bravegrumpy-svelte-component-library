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
		args: {}
	});
</script>

<Story name="DefaultLight" args={{ text: 'Light', href: '/', slug: '/other', reversed: false }} />
<Story
	name="DefaultDark"
	args={{ text: 'Dark', href: '/', slug: '/other', reversed: false, class: 'bg:dark' }}
/>
<Story
	name="ActiveDefaultLight"
	args={{ text: 'Active Light', href: '/', slug: '/', reversed: false }}
/>
<Story
	name="ActiveDefaultDark"
	args={{ text: 'Active Dark', href: '/', slug: '/', reversed: false, class: 'bg:dark' }}
/>
<Story
	name="ReversedDefaultLight"
	args={{ text: 'Reversed Default Light', href: '/', slug: '/other', reversed: true }}
/>
<Story
	name="ReversedDefaultDark"
	args={{ text: 'Reversed Default Dark', href: '/', slug: '/other', reversed: true, class: 'bg:dark' }}
/>
<Story
	name="ReversedActiveLight"
	args={{ text: 'Reversed Active Light', href: '/', slug: '/', reversed: true }}
/>
<Story
	name="ReversedActiveDark"
	args={{ text: 'Reversed Active Dark', href: '/', slug: '/', reversed: true, class: 'bg:dark' }}
/>
