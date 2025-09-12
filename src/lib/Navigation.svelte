<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
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

	type NavElementType = SvelteHTMLElements['nav'];

	interface Props extends NavElementType {
		slug?: string;
		links?: ref[];
		reversed?: boolean;
		navId?: string;
		className?: string;
		navButtonClass?: string;
	}

	const {
		slug,
		links = exLinks,
		reversed = false,
		class: containerClass = '',
		navId = 'navigation',
		className = '',
		navButtonClass = ''
	}: Props = $props();

	// function toggleNav() {
	// 	document.getElementById(navId)?.classList.toggle('bg:invisible');
	// }
	function toggleNav() {
		const nav = document.getElementById(navId);
		if (nav?.classList.contains('bg:hidden')) {
			nav.classList.remove('bg:hidden');
			nav.classList.add('bg:flex');
		} else if (nav?.classList.contains('bg:flex')) {
			nav.classList.remove('bg:flex');
			nav.classList.add('bg:hidden');
		}
	}

	const scratch = $state(
		'bg:invisible bg:sm:visible bg:sm:flex bg:sm:w-100 bg:w-fit bg:flex-col bg:gap-2 bg:lg:flex-row'
	);
</script>

<div class="{containerClass}">
	<Button
		icon="hugeicons:menu-01"
		onclick={() => {
			toggleNav();
		}}
		class="bg:w-full bg:my-3 bg:sm:w-fit bg:md:hidden bg:xs:max-w-9/12 bg:xs:w-full bg:xs:mx-auto"
		iconStyles="bg:mx-auto"
		iconSize="bg:size-8 bg:sm:size-10"
	/>

	<nav
		id={navId}
		class={`bg:hidden bg:md:flex bg:md:flex-col bg:lg:flex-row bg:md:flex-wrap bg:flex-col bg:gap-2 ${className}`}
	>
		{#each links as link (link.id)}
			<NavButton
				{slug}
				href={link.href}
				text={link.text}
				{reversed}
				class="bg:h-fit bg:md:w-fit bg:md:max-w-25 bg:md:overflow-clip bg:lg:w-fit bg:lg:max-w-full {navButtonClass}"
			/>
		{/each}
		<ThemeToggle
			class="bg:w-full bg:h-15 bg:xs:size-15 bg:self-center bg:sm:size-10 bg:sm:self-start bg:lg:self-center"
			iconSize="30"
		/>
	</nav>
</div>