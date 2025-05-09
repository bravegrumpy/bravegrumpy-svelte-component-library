<script lang="ts">
    function toggleDarkMode() {
        document.body.classList.toggle('dark');
    }
</script>

<button onclick={toggleDarkMode}>
    <p class="dark:hidden scale-100 dark:scale-0 inline">Light</p>
    <p class="dark:inline hidden  scale-0 dark:scale-100">Dark</p>
</button>