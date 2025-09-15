<script lang="ts">
	import { type Snippet, onMount } from 'svelte';
	import type { SvelteHTMLElements } from 'svelte/elements';
	type SvelteMainElement = SvelteHTMLElements['main'];
	interface Props extends SvelteMainElement {
		children?: Snippet;
	}
	let { children, class: mainClasses = '' }: Props = $props();

	const gridClasses = $state<string>(
		`bg:grid bg:grid-cols-[grid-template-columns:1fr_2fr_1fr] bg:gap-4 ${mainClasses}`
	);

	onMount(() => {
		console.log(gridClasses);
	});
</script>

<main>
	{@render children?.()}
</main>
