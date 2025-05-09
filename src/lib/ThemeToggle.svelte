<script lang="ts">
	import './styles.css';
	function toggleDarkMode() {
		document.body.classList.toggle('dark');
	}
</script>

<button onclick={toggleDarkMode}>
	<p class="inline scale-100 dark:hidden dark:scale-0">Light</p>
	<p class="hidden scale-0 dark:inline dark:scale-100">Dark</p>
</button>
