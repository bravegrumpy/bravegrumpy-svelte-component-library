<script lang="ts">
	import './styles.css';
	import NavButton from './NavButton.svelte';

	interface Props {}

	const { slug } = $props();

	let i = $state(1);
	const links = [
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
</script>

<nav class="bg:flex bg:flex-col bg:gap-3 bg:lg:flex-row">
	{#each links as link (link.id)}
		<NavButton {slug} href={link.href} text={link.text} />
	{/each}
</nav>
