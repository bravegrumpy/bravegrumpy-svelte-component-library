<script lang="ts">
	import Logo from '$lib/Logo.svelte';
	import Navigation, { type ref } from '$lib/Navigation.svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	type SvelteHeaderElement = SvelteHTMLElements['header'];
	interface Props extends SvelteHeaderElement {
		links?: ref[];
		subLinks?: ref[] | string;
		slug?: string;
		subSlug?: string;
	}
	let { links, subLinks = '', slug, subSlug }: Props = $props();
</script>

<!-- <header
	class="bg:bg-bravegrumpy-accent1a bg:dark:bg-bravegrumpy-logoPurple bg:col-span-3 bg:grid bg:grid-cols-3"
>
	<Logo class="bg:col-span-1" />
	<Navigation {slug} class="bg:col-start-3 bg:py-10" reversed {links} />
	<div
		class="bg:col-span-3 bg:bg-bravegrumpy-logoPurple bg:h-fit bg:py-2 bg:min-h-18 bg:my-auto bg:dark:bg-bravegrumpy-accent2a bg:mt-2"
	>
		{#if subLinks !== ''}
			<Navigation links={subLinks as ref[]} themeToggle={false} class="bg:ml-5" slug={subSlug} />
		{/if}
	</div>
</header> -->
<header class="bg:flex bg:flex-col bg:bg-bravegrumpy-accent1a bg:dark:bg-bravegrumpy-logoPurple">
	<Logo />
	<Navigation {links} reversed/>
	{#if subLinks}
		<Navigation links={subLinks as ref[]} />
	{/if}
</header>
