<script lang="ts">
	import type { LayoutProps } from './$types.js';
	let { data, children }: LayoutProps = $props();
	import '../app.css';
	import { onMount } from 'svelte';

	import Logo from '$lib/Logo.svelte';
	import { page } from '$app/state';
	import Navigation from '$lib/Navigation.svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import Main from '$lib/Main.svelte';
	import Header from '$lib/Header.svelte';

	let bodyClass = $state(
		'bg:bg-solarized-base-2 bg:dark:bg-solarized-base-02 bg:text-bravegrumpy-black bg:dark:text-bravegrumpy-accent2a'
	);

	function addBodyClass() {
		document.body.className = bodyClass;
	}

	onMount(() => {
		addBodyClass();
	});

	const links = $derived(data.routes);

	const currSlug = $derived(page.url.pathname);
	const subLinks = $derived(page.data.subRoutes);
	const subSlug = $derived(page.url.pathname);
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@100..900&family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<Main class="bg:bg-solarized-base-3 bg:dark:bg-solarized-base-03 bg:w-9/12 bg:mx-auto">
	<Header {links} slug={currSlug} {subLinks} {subSlug} class="bg:row-start-1 bg:col-span-4" />
	{@render children?.()}
</Main>
