<script lang="ts">
	import Icon from '@iconify/svelte';

	import type { Snippet } from 'svelte';

	interface Props {
		icon?: string | false;
		children?: Snippet;
		[key: string]: unknown;
		className?: string;
		lightColors?: string;
		darkColors?: string;
		shape?: string;
		iconSize?: string;
		customStyles?: string;
	}

	const {
		icon = false,
		children,
		lightColors = 'bg:bg-bravegrumpy-accent2a bg:text-bravegrumpy-logoPurple',
		darkColors = 'bg:dark:bg-bravegrumpy-brand6 bg:dark:text-bravegrumpy-accent1a',
		shape = 'bg:p-1 bg:border-2 bg:border-solid bg:rounded-sm',
		class: customStyles = '',
		className = `${lightColors} ${darkColors} ${shape} ${customStyles}`,
		iconSize = 'bg:size-11.5',
		...props
	}: Props = $props();
</script>

<button {...props} class={`${className}`}>
	{#if typeof icon === 'string'}
		<Icon {icon} class={`bg:p-0 ${iconSize}`} />
	{/if}

	{@render children?.()}
</button>
