<script lang="ts">
	import './styles.css';
	import NavButton from './NavButton.svelte';
	import Button from './Button.svelte';

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
		document.getElementById(navId)?.classList.toggle('bg:hidden');
	}
</script>

	<!-- <div class="bg:inline bg:sm:hidden bg:my-5 bg:bg-yellow-700"> -->
		<Button
			icon="hugeicons:menu-01"
			onclick={() => {
				toggleNav();
			}}
			class="bg:2xs:w-1/2 bg:2xs:mx-auto"
			iconStyles="bg:mx-auto"
		/>
	<!-- </div> -->

	<nav
		id={navId}
		class={`bg:hidden bg:sm:flex bg:w-fit bg:flex-col bg:gap-3 bg:lg:flex-row ${className} ${theme}`}
	>
		{#each links as link (link.id)}
			<NavButton {slug} href={link.href} text={link.text} {reversed} />
		{/each}
	</nav>