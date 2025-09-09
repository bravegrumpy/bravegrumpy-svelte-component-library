<script lang="ts">
	import './styles.css';
	import NavButton from './NavButton.svelte';
	import Button from './Button.svelte';
	import ThemeToggle from './ThemeToggle.svelte';

	export type ref = {
		id: string | number;
		href: string;
		text: string;
	};

	let i = 1;
	const exLinks: ref[] = $state([
		{
			id: `${i++}_Navigation`,
			href: '/',
			text: 'Home'
		},
		{
			id: i++,
			href: '/about',
			text: 'About'
		}
	]);

	interface Props {
		slug?: string;
		links?: ref[];
		reversed?: boolean;
		theme?: 'dark' | '' | null | undefined;
		className?: string;
		navId?: string;
	}

	const {
		slug,
		links = exLinks,
		reversed = false,
		theme = '',
		className = '',
		navId = 'navigation'
	}: Props = $props();

	function toggleNav() {
		document.getElementById(navId)?.classList.toggle('bg:invisible');
	}
</script>

	<div class="bg:block bg:sm:visible">
		<Button
			icon="hugeicons:menu-01"
			onclick={() => {
				toggleNav();
			}}
			class="bg:w-fit bg:sm:hidden bg:static bg:right-5"
			iconStyles="bg:mx-auto"
			iconSize="bg:size-8"
		/>
	</div>

	<nav
		id={navId}
		class={`bg:invisible bg:sm:visible bg:sm:flex bg:sm:w-100 bg:w-fit bg:flex-col bg:gap-2 bg:lg:flex-row ${className} ${theme}`}
	>
		{#each links as link (link.id)}
			<NavButton {slug} href={link.href} text={link.text} {reversed} class="bg:h-fit" />
		{/each}
		<ThemeToggle class="bg:size-10 bg:mt-1" iconSize="30" />
	</nav>