<script lang="ts">
	import './styles.css';
	import Icon from '@iconify/svelte';
	import Button from '$lib/Button.svelte';
	function toggleDarkMode() {
		document.body.classList.toggle('dark');
	}
</script>

<!-- <button onclick={toggleDarkMode}>
	<p class="bg:inline bg:scale-100 bg:dark:hidden bg:dark:scale-0">Light</p>
	<p class="bg:hidden bg:scale-0 bg:dark:inline bg:dark:scale-100">Dark</p>
</button> -->

<Button onclick={toggleDarkMode}>
	<Icon
		icon="game-icons:evil-moon"
		width={50}
		class="bg:inline bg:scale-100 bg:dark:hidden bg:dark:scale-0"
	/>
	<Icon
		icon="game-icons:sun"
		width={50}
		class="bg:hidden bg:scale-0 bg:dark:inline bg:dark:scale-100"
	/>
</Button>
