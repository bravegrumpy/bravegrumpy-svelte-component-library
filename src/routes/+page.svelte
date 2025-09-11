<script lang="ts">
	import { page } from '$app/state';
	import Icon from '@iconify/svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import Logo from '$lib/Logo.svelte';
	import NavButton from '$lib/NavButton.svelte';
	import Navigation from '$lib/Navigation.svelte';

	let i = $state<number>(3);
	let r = $state<boolean>(false);

	let rev = $derived((n: number) => (r ? n % 2 === 0 : n % 2 === 1));

	let currPage = $derived(page.url.pathname);
</script>

<p>This is the home page</p>

<PageTitle />
<Icon icon="hugeicons:test-tube-03" width={48} height={48} class="bg:text-primary" />
{#snippet inputLogo()}
	<div class="bg:bg-yellow bg:rounded-4xl bg:mask-intersect">
		<span class="bg:icon-[hugeicons--test-tube-03] bg:size-15 bg:rotate-45"></span>
	</div>
{/snippet}

<div
	class="bg:mx-auto bg:w-fit bg:bg-bravegrumpy-accent2a bg:dark:bg-bravegrumpy-black bg:p-5 bg:rounded-lg bg:border-2 bg:border-solid bg:border-bravegrumpy-black bg:dark:border-bravegrumpy-accent2a"
>
	<Logo art={{ component: inputLogo }} />
</div>

<div class="bg:first-letter:text-2xl">
	<p class="bg:font-bodyText">Four Score and seven years ago</p>
</div>

<div class="bg:w-fit bg:mx-auto bg:my-10">
	<NavButton text="test"/>
</div>

<div
	class="bg:flex bg:flex-row bg:flex-wrap bg:gap-5 bg:border-solid bg:w-fit bg:mx-auto bg:my-5 bg:*:border-2 bg:*:border-solid bg:*:rounded-md"
>
	<div>
		<p class="bg:inline">Number of Navigation Bars:</p>
		<input type="number" bind:value={i} class="bg:inline bg:w-15" />
	</div>
	<div>
		<p class="bg:inline">Reversed?</p>
		<input type="checkbox" class="bg:inline" bind:checked={r} />
	</div>
</div>

<div class="bg:flex bg:flex-row bg:flex-wrap bg:w-fit bg:gap-5 bg:bg-yellow bg:mx-auto">
	<NavButton href="/abcdef" slug={page.url.pathname} text="button" />
	{#each { length: i }, j}
		<Navigation navId="navigation-{j}" reversed={rev(j)} class="bg:bg-royal-purple-400" />
		<p>&nbsp;</p>
	{/each}
</div>
