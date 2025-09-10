<script lang="ts">
	import Icon from "@iconify/svelte"
	import PageTitle from '$lib/PageTitle.svelte';
	import Logo from '$lib/Logo.svelte';
</script>

<p>This is the home page</p>

<PageTitle />
<!-- <Icon icon="hugeicons:poop" width={48} height={48} class="bg:text-primary" /> -->
{#snippet inputLogo()}
	<div class="bg:bg-yellow bg:rounded-4xl bg:mask-intersect">
		<span class="bg:icon-[hugeicons--poop] bg:size-15"></span>
	</div>
{/snippet}

<div class="bg:mx-auto bg:w-fit bg:bg-bravegrumpy-accent2a bg:dark:bg-bravegrumpy-black bg:p-5 bg:rounded-lg bg:border-2 bg:border-solid bg:border-bravegrumpy-black bg:dark:border-bravegrumpy-accent2a">
	<Logo art={{ component: inputLogo}} />
</div>