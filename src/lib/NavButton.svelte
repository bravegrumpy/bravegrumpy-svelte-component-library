<script lang="ts">
	import './styles.css';
	interface Props {
		text: string;
		href: string;
		slug?: string;
		reversed?: boolean;
		className?: string;
		[key: string]: unknown;
	}
	const {
		href,
		text,
		class: className = '',
		slug = '/',
		reversed = false,
		...props
	}: Props = $props();
	const baseClass = $state(
		'bg:px-5 bg:py-2 bg:border-5 bg:border-solid bg:hover:hue-rotate-15 bg:hover:scale-105 bg:rounded bg:text-center bg:w-full bg:sm:w-fit'
	);
	const defaultLight = $state(
		'bg:bg-bravegrumpy-brand1 bg:text-bravegrumpy-accent1a bg:font-navMenuDefault'
	);
	const defaultDark = $state('bg:dark:bg-bravegrumpy-accent1a bg:dark:text-bravegrumpy-logoPurple');
	const activeLight = $state(
		'bg:data-[active=true]:text-bravegrumpy-highlight1 bg:data-[active=true]:font-navMenuActive'
	);
	const activeDark = $state('bg:dark:data-[active=true]:text-bravegrumpy-brand1');
	const reverseDefaultLight = $state(
		'bg:data-[reversed=true]:bg-bravegrumpy-accent1a bg:data-[reversed=true]:text-bravegrumpy-logoPurple'
	);
	const reverseDefaultDark = $state(
		'bg:dark:data-[reversed=true]:bg-bravegrumpy-brand1 bg:dark:data-[reversed=true]:text-bravegrumpy-accent1a'
	);
	const reversedActiveLight = $state(
		'bg:data-[active=true]:data-[reversed=true]:text-bravegrumpy-brand1'
	);
	const reversedActiveDark = $state(
		'bg:dark:data-[active=true]:data-[reversed=true]:text-bravegrumpy-highlight1'
	);

	const themeClasses = $derived(
		`${defaultLight} ${defaultDark} ${activeLight} ${activeDark} ${reverseDefaultLight} ${reverseDefaultDark} ${reversedActiveLight} ${reversedActiveDark}`
	);
</script>

<a
	{...props}
	{href}
	data-reversed={reversed}
	data-active={slug === href}
	class={`${className} ${baseClass} ${themeClasses}`}
>
	{text}
</a>
