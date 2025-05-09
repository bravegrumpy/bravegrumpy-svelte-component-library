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
		class="mt-6 self-start rounded-md"
	/>
	<div
		class={`text-bravegrumpy-logoPurple dark:text-bravegrumpy-accent1a flex flex-col items-center justify-start gap-2 ${className}`}
	>
		<p class="font-logo text-8xl">{logo}</p>
		<p class="font-logoSubtitle w-[25rem] text-left text-2xl text-wrap">{subtitle}</p>
	</div>
</div>
