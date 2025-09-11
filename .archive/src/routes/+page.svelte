<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '@iconify/svelte';
	import PageTitle from '$lib/PageTitle.svelte';
	import Logo from '$lib/Logo.svelte';
	import NavButton from '$lib/NavButton.svelte';
	import Navigation from '$lib/Navigation.svelte';

	let c = $state<number>(4);

	let makeI = $derived((v: number) => {
		const arr = new Array<number>(v);
		let j = 0;
		while (j < v) {
			arr[j] = j;
		}
		return arr;
	});

	let i = $derived<number[]>(makeI(c));

	let checked = $state<boolean>(false);

	let rev = $derived(() => {
		let arr = new Array<boolean>();
		for (let j = 0; j < i.length; j++) {
			arr.push(j % 0 === 0);
		}
		return arr;
	});

	let revved = $derived(rev());
	let reversed = $derived((c: boolean, idx: number) => {
		return c ? revved[idx] : !revved[idx];
	});
</script>

<p>This is the home page</p>

<PageTitle />
<Icon icon="hugeicons:poop" width={48} height={48} class="bg:text-primary" />
{#snippet inputLogo()}
	<div class="bg:bg-yellow bg:rounded-4xl bg:mask-intersect">
		<span class="bg:icon-[hugeicons--poop] bg:size-15"></span>
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

<div class="bg:w-fit bg:mx-auto">
	<NavButton class="bg:w-full" text="hello" slug="/" reversed />
</div>

<div>
	<p class="bg:inline">How many navs?</p>
	<input bind:value={c} class="bg:inline bg:w-15" type="number" />
	<p></p>
	<p class="bg:inline">Reversed?</p>
	<input bind:checked class="bg:inline" type="checkbox" />
</div>

{#each i as j}
	<Navigation navId="navigation-{j}" reversed={reversed(checked, j)} />
	<p>Hello {typeof j}</p>
{/each}
