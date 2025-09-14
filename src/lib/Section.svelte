<script lang="ts">
    import type { Snippet } from "svelte";
    interface Props {
        children?: Snippet
    }
    let { children }: Props = $props();
</script>

<section class='bg:bg-bravegrumpy-accent2a bg:border-2 bg:border-solid bg-:border-bravegrumpy-black bg:rounded-md bg:px-5 bg:py-2 bg:font-bodyText bg:indent-5 bg:max-w-6/12 bg:w-full bg:dark:bg-bravegrumpy-black bg:dark:text-bravegrumpy-accent2a bg:my-5 bg:mx-auto bg:prose bg:prose-headings:font-heading bg:prose-headings:text-bravegrumpy-black bg:prose-headings:dark:text-bravegrumpy-accent2a bg:prose-h2:text-4xl bg:prose-h3:text-3xl bg:prose-h4:text-2xl bg:prose-h5:text-2xl bg:prose-h6:text-xl'>
    {@render children?.()}
</section>