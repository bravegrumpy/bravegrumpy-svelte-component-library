<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';

	import Logo from '$lib/Logo.svelte';
	import { page } from '$app/state';
	import Navigation from '$lib/Navigation.svelte';

	let bodyClass = $state('bg:bg-solarized-base-2 bg:dark:bg-solarized-base-02 bg:text-bravegrumpy-black bg:dark:text-bravegrumpy-accent2a');

	function addBodyClass() {
		document.body.className = bodyClass;
	}

	onMount(() => {
		addBodyClass();
	});

	const currSlug = $derived(page.url.pathname);

	let { children } = $props();
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Grenze+Gotisch:wght@100..900&family=Recursive:slnt,wght,CASL,CRSV,MONO@-15..0,300..1000,0..1,0..1,0..1&family=Texturina:ital,opsz,wght@0,12..72,100..900;1,12..72,100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>


<Logo />
<Navigation slug={currSlug} />
{@render children?.()}
