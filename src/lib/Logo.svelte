<script lang="ts">
	import './styles.css';
	interface Props {
		className?: string;
		logo?: string;
		subtitle?: string;
	}

	const {
		class: className = '',
		logo = 'Bravegrumpy',
		subtitle = 'Welcome to my chaotic castle of creativity.  I hope you find some cool stuff.'
	} = $props();
</script>

<div class="flex flex-col items-center justify-start gap-1 lg:flex-row">
	<img
		src="https://cdn.bravegrumpy.com/static/assets/images/BG_logo.png"
		alt=""
		width="80px"
		height="80px"
		class="bg:mt-6 bg:self-start bg:rounded-md"
	/>
	<div
		class={`bg:text-bravegrumpy-logoPurple bg:dark:text-bravegrumpy-accent1a bg:flex bg:flex-col bg:items-center bg:justify-start bg:gap-2 ${className}`}
	>
		<p class="bg:font-logo bg:text-8xl">{logo}</p>
		<p class="bg:font-logoSubtitle bg:w-[25rem] bg:text-left bg:text-2xl bg:text-wrap">{subtitle}</p>
	</div>
</div>
