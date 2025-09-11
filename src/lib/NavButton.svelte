<script lang="ts">
	import { type HTMLAnchorAttributes } from 'svelte/elements';
	interface Props extends HTMLAnchorAttributes {
		text: string;
		slug?: string;
		reversed?: boolean;
		className?: string;
		baseClass?: string;
		defaultLight?: string;
		defaultDark?: string;
		activeLight?: string;
		activeDark?: string;
		reverseDefaultLight?: string;
		reverseDefaultDark?: string;
		reversedActiveLight?: string;
		reversedActiveDark?: string;
		themeClasses?: string;
		customClasses?: string;
	}
	const {
		href,
		text,
		class: customClasses = '',
		slug = '/',
		reversed = false,
		baseClass = 'bg:px-5 bg:py-2 bg:border-5 bg:border-solid bg:hover:hue-rotate-15 bg:hover:scale-105 bg:rounded bg:text-center bg:w-full bg:sm:w-fit',
		defaultLight = 'bg:bg-bravegrumpy-brand1 bg:text-bravegrumpy-accent1a bg:font-navMenuDefault',
		defaultDark = 'bg:dark:bg-bravegrumpy-accent1a bg:dark:text-bravegrumpy-logoPurple',
		activeLight = 'bg:data-[active=true]:text-bravegrumpy-highlight1 bg:data-[active=true]:font-navMenuActive',
		activeDark = 'bg:dark:data-[active=true]:text-bravegrumpy-brand1',
		reverseDefaultLight = 'bg:data-[reversed=true]:bg-bravegrumpy-accent1a bg:data-[reversed=true]:text-bravegrumpy-logoPurple',
		reverseDefaultDark = 'bg:dark:data-[reversed=true]:bg-bravegrumpy-brand1 bg:dark:data-[reversed=true]:text-bravegrumpy-accent1a',
		reversedActiveLight = 'bg:data-[active=true]:data-[reversed=true]:text-bravegrumpy-brand1',
		reversedActiveDark = 'bg:dark:data-[active=true]:data-[reversed=true]:text-bravegrumpy-highlight1',
		themeClasses = `${defaultLight} ${defaultDark} ${activeLight} ${activeDark} ${reverseDefaultLight} ${reverseDefaultDark} ${reversedActiveLight} ${reversedActiveDark}`,
		className = `${customClasses} ${baseClass} ${themeClasses}`,
		...props
	}: Props = $props();

	const themeClasses1 = $state(
		`${defaultLight} ${defaultDark} ${activeLight} ${activeDark} ${reverseDefaultLight} ${reverseDefaultDark} ${reversedActiveLight} ${reversedActiveDark}`
	);

	const className1 = $derived(
		className === '' ? `${customClasses} ${baseClass} ${themeClasses}` : className
	);
</script>

<a {...props} {href} data-reversed={reversed} data-active={slug === href} class={className}>
	{text}
</a>
