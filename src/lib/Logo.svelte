<script lang="ts">
    interface Props {
        className?: string;
        logo?: string;
        subtitle?: string;
    };

    const { class:className='', logo="Bravegrumpy", subtitle="Welcome to my chaotic castle of creativity.  I hope you find some cool stuff." } = $props();
</script>
<div class="flex flex-col lg:flex-row gap-1 justify-start items-center">
    <img
        src="https://cdn.bravegrumpy.com/static/assets/images/BG_logo.png"
        alt=""
        width="80px"
        height="80px"
        class="rounded-md self-start mt-6"
     />
    <div class={`flex flex-col gap-2 text-bravegrumpy-logoPurple dark:text-bravegrumpy-accent1a justify-start items-center ${className}`}>
        <p class="font-logo text-8xl">{logo}</p>
        <p class="font-logoSubtitle text-2xl text-left text-wrap w-[25rem]">{subtitle}</p>
    </div>
</div>