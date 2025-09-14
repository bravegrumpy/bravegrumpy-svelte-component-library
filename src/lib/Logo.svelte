<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes, HTMLImgAttributes } from 'svelte/elements';

	interface Props extends HTMLAttributes<HTMLDivElement>, HTMLAttributes<HTMLParagraphElement> {
		logo?: string | Snippet;
		subtitle?: string | Snippet;
		art?: {
			component?: Snippet;
			img?: HTMLImgAttributes | null;
		} | null;
	}

	const {
		class: className = '',
		logo = 'Bravegrumpy',
		subtitle = 'Welcome to my chaotic castle of creativity.  I hope you find some cool stuff.',
		art = null,
		...props
	}: Props = $props();

	let inputLogo = $derived(art?.component);
	let imgAttrs = $derived({ ...art?.img });

	let textColor = $state('bg:text-bravegrumpy-black bg:dark:text-bravegrumpy-accent1a');

	let imgClasses = $state(
		'bg:size-8 bg:rounded-sm bg:6xs:size-10 bg:5xs:size-13 bg:4xs:size-15 bg:3xs:size-13 bg:xs:size-18 bg:sm:size-20'
	);
	let logoClasses = $state(
		'bg:font-logo bg:text-2xl bg:scale-105 bg:6xs:scale-100 bg:6xs:text-4xl bg:5xs:text-5xl bg:4xs:text-6xl bg:2xs:text-5xl bg:xs:text-7xl bg:xs:-mt-2 bg:sm:mt-4 bg:sm:text-7xl bg:md:-mt-2 bg:lg:text-8xl bg:lg:mt-0'
	);
	let logoSubtitleClasses = $state(
		'bg:font-logoSubtitle bg:hidden bg:2xs:block bg:2xs:text-xs bg:2xs:text-center bg:2xs:self-center bg:xs:w-5/8 bg:xs:text-left bg:xs:-mt-2 bg:xs:-ml-15 bg:xs:text-sm bg:sm:text-md bg:sm:w-6/8 bg:lg:text-lg bg:lg:-ml-15 bg:lg:w-5/8'
	);
	let divClasses = $state(
		'bg:flex bg:flex-row bg:max-w-full bg:w-full bg:mx-auto bg:justify-start bg:gap-2 bg:4xs:w-fit bg:2xs:mx-0 bg:2xs:w-full bg:2xs:justify-around bg:xs:w-fit'
	);
	let textDivClasses = $state(
		'bg:w-fit bg:h-fit bg:self-center bg:2xs:flex bg:2xs:flex-row bg:2xs:gap-2 bg:xs:flex-col'
	);
</script>

<div class={` ${divClasses} ${className}`} {...props}>
	{#if art !== null}
		{#if inputLogo}
			{@render inputLogo()}
		{:else if art.img}
			<img {...imgAttrs} class={imgClasses} />
		{/if}
	{:else}
		<img
			src="https://cdn.bravegrumpy.com/static/assets/images/BG_logo.png"
			alt=""
			class={imgClasses}
		/>
	{/if}
	<div class={textDivClasses}>
		<h1 class="{logoClasses} {textColor}">
			{#if typeof logo !== 'string'}
				{@render logo()}
			{:else}
				{logo}
			{/if}
		</h1>
		<p class="{logoSubtitleClasses} {textColor}">
			{#if typeof subtitle !== 'string'}
				{@render subtitle()}
			{:else}
				{subtitle}
			{/if}
		</p>
	</div>
</div>
