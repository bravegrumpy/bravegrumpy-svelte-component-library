<script lang="ts">
	import './styles.css';
	import NavButton from './NavButton.svelte';

	type ref = {
		id: string | number;
		href: string;
		text: string;
	};

	let i = 1;
	const exLinks: ref[] = [
		{
			id: i++,
			href: '/',
			text: 'Home'
		},
		{
			id: i++,
			href: '/about',
			text: 'About'
		}
	];

	interface Props {
		slug?: string;
		links?: ref[];
		reversed?: boolean;
		theme?: 'dark' | '';
		className?: string;
	}

	const { slug, links = exLinks, reversed = false, theme = '', class: className = '' } = $props();
</script>

<nav class={`bg:flex bg:flex-col bg:gap-3 bg:lg:flex-row ${className} ${theme}`}>
	{#each links as link (link.id)}
		<NavButton {slug} href={link.href} text={link.text} {reversed} />
	{/each}
</nav>
