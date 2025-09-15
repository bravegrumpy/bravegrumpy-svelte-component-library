<script lang="ts">
	import { type HTMLButtonAttributes } from 'svelte/elements';
	import Icon from '@iconify/svelte';
	import Button from '$lib/Button.svelte';
	function toggleDarkMode() {
		document.body.classList.toggle('dark');
	}

	interface Props extends HTMLButtonAttributes {
		iconSize?: number | string;
		lightIcon?: string;
		darkIcon?: string;
	}
	const {
		class: className = '',
		iconSize = 50,
		lightIcon = 'game-icons:sun',
		darkIcon = 'game-icons:evil-moon',
		...props
	}: Props = $props();
</script>

<!-- <button onclick={toggleDarkMode}>
	<p class="bg:inline bg:scale-100 bg:dark:hidden bg:dark:scale-0">Light</p>
	<p class="bg:hidden bg:scale-0 bg:dark:inline bg:dark:scale-100">Dark</p>
</button> -->

<Button onclick={toggleDarkMode} class={`${className}`} {...props}>
	<Icon
		icon={darkIcon}
		width={iconSize}
		class="bg:inline bg:scale-100 bg:dark:hidden bg:dark:scale-0"
	/>
	<Icon
		icon={lightIcon}
		width={iconSize}
		class="bg:hidden bg:scale-0 bg:dark:inline bg:dark:scale-100"
	/>
</Button>
