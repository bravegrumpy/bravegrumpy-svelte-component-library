<script lang="ts">
	import Navigation from '$lib/Navigation.svelte';

	import { page } from '$app/state';
</script>

<div class="bg:w-fit bg:mx-auto bg:my-10">
	<Navigation navId="homepage" links={page.data.routes} />
</div>
