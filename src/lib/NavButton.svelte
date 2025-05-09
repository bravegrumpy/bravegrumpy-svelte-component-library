<script lang="ts">
    interface Props {
        text: string;
        href: string;
        slug?: string;
        reversed?: boolean;
        className?: string;
    }
    const { href, text, className='', slug = '/', reversed=false } = $props();
    const baseClass = $state('px-5 py-2 border-5 border-solid hover:hue-rotate-15 hover:scale-105 rounded text-center');
    const defaultLight = $state('bg-bravegrumpy-brand1 text-bravegrumpy-accent1a font-navMenuDefault');
    const defaultDark = $state('dark:bg-bravegrumpy-accent1a dark:text-bravegrumpy-logoPurple');
    const activeLight = $state('data-[active=true]:text-bravegrumpy-highlight1 data-[active=true]:font-navMenuActive');
    const activeDark = $state('dark:data-[active=true]:text-bravegrumpy-brand1');
    const reverseDefaultLight = $state('data-[reversed=true]:bg-bravegrumpy-accent1a data-[reversed=true]:text-bravegrumpy-logoPurple');
    const reverseDefaultDark = $state('dark:data-[reversed=true]:bg-bravegrumpy-brand1 dark:data-[reversed=true]:text-bravegrumpy-accent1a');
    const reversedActiveLight = $state("data-[active=true]:data-[reversed=true]:text-bravegrumpy-brand1");
    const reversedActiveDark = $state('dark:data-[active=true]:data-[reversed=true]:text-bravegrumpy-highlight1');

    const themeClasses = $derived(`${defaultLight} ${defaultDark} ${activeLight} ${activeDark} ${reverseDefaultLight} ${reverseDefaultDark} ${reversedActiveLight} ${reversedActiveDark}`);
</script>
<a 
    href={href} 
    data-reversed={reversed}
    data-active={slug === href} 
    class={`${className} ${baseClass} ${themeClasses}`}>
        {text}
</a>