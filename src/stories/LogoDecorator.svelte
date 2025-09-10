<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
	}
	let { children }: Props = $props();
</script>

<div class="bg:bg-bravegrumpy-accent1a bg:dark:bg-bravegrumpy-logoPurple logo">
	{@render children()}
</div>
