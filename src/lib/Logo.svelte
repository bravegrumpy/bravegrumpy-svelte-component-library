<script lang="ts">
	import '../app.css';
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

<div
	class={`bg:flex bg:flex-row bg:justify-start bg:gap-2 bg:w-full bg:text-bravegrumpy-logoPurple bg:dark:text-bravegrumpy-accent1a bg:sm:items-start items-center ${className}`}
>
	<img
		src="https://cdn.bravegrumpy.com/static/assets/images/BG_logo.png"
		alt=""
		class="bg:size-10 bg:rounded-md bg:2xs:size-15 bg:sm:mt-2 bg:xs:self-center bg:sm:size-16 bg:sm:self-start bg:md:size-20 bg:md:mt-3 bg:lg:mt-4 bg:xl:mt-6"
	/>
	<div
		class="bg:flex bg:flex-col bg:justify-center bg:items-center bg:gap-1 bg:xs:flex-row bg:sm:flex-col bg:sm:w-fit bg:xs:gap-4 bg:xs:items:center bg:sm:gap-0"
	>
		<p
			class="bg:font-logo bg:text-4xl bg:2xs:text-5xl bg:md:text-6xl bg:lg:text-7xl bg:xl:text-8xl"
		>
			{logo}
		</p>
		<p
			class="bg:font-logoSubtitle bg:text-md bg:hidden bg:text-center bg:xs:block bg:xs:text-xs bg:xs:text-center bg:xs:shrink-2 bg:xs:w-40 bg:sm:text-xs bg:sm:w-49 bg:md:text-base bg:md:w-75 bg:lg:w-60 bg:xl:w-82 bg:xl:self-center bg:xl:-ml-4 bg:xl:text-center"
		>
			{subtitle}
		</p>
	</div>
</div>
