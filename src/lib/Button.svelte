<script lang="ts">
	import Icon from '@iconify/svelte';
	import { type HTMLButtonAttributes } from 'svelte/elements';

	import type { Snippet } from 'svelte';

	interface Props extends HTMLButtonAttributes {
		icon?: string | false;
		children?: Snippet;
		className?: string;
		lightColors?: string;
		darkColors?: string;
		shape?: string;
		iconSize?: string;
		iconStyles?: string;
		hoverStyles?: string;
		theme?: 'dark' | '';
	}

	const {
		icon = false,
		children,
		lightColors = 'bg:bg-bravegrumpy-accent2a bg:text-bravegrumpy-logoPurple',
		darkColors = 'bg:dark:bg-bravegrumpy-brand6 bg:dark:text-bravegrumpy-accent1a',
		shape = 'bg:p-1 bg:border-2 bg:border-solid bg:rounded-sm',
		hoverStyles = "bg:hover:scale-105 bg:hover:hue-rotate-15",
		class: customStyles = '',
		theme = '',
		className = `${lightColors} ${darkColors} ${shape} ${hoverStyles} ${customStyles} ${theme}`,
		iconSize = 'bg:size-11.5',
		iconStyles = '',
		...props
	}: Props = $props();
</script>

<button {...props} class={`${className}`}>
	{#if typeof icon === 'string'}
		<Icon {icon} class={`bg:p-0 ${iconSize} ${iconStyles}`} />
	{/if}

	{@render children?.() }
</button>