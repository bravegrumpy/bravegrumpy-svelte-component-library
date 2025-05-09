<script lang="ts">
	import './styles.css';
	function toggleDarkMode() {
		document.body.classList.toggle('dark');
	}
</script>

<button onclick={toggleDarkMode}>
	<p class="bg:inline bg:scale-100 bg:dark:hidden bg:dark:scale-0">Light</p>
	<p class="bg:hidden bg:scale-0 bg:dark:inline bg:dark:scale-100">Dark</p>
</button>
