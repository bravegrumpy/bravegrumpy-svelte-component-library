<script module>
    import "../app.css"
    import { defineMeta } from "@storybook/addon-svelte-csf";
    import Navigation from "$lib/Navigation.svelte";
    import { fn } from "@storybook/test";

    const { Story } = defineMeta({
        title: "Bravegrumpy/Navigation",
        component: Navigation,
        tags: ['autodocs'],
        argTypes: {
            slug: {
                control: 'text'
            }
        },
        args: {}
    });
</script>

<Story name="Default" args={{ slug: '/about'}} />