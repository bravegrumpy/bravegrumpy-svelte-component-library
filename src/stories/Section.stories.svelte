<script module>
	import { defineMeta } from "@storybook/addon-svelte-csf";
    import Section from "$lib/Section.svelte";

    const { Story } = defineMeta({
        title: "Bravegrumpy/Section",
        component: Section,
        tags: ['autodocs']
    });

</script>

<Story 
    name="Default"
>
    <p>Something is here, rn.  By that, I mean it is a really, really long paragraph, and I want to eat a sandwich</p>
    <p>Something is here, rn.  By that, I mean it is a really, really long paragraph, and I want to eat a sandwich</p>
    <div>
        <h3>Title</h3>
        <p>This is a section.</p>
        <p>It is separated out, in theory, but not really in practice.</p>
    </div>
</Story>