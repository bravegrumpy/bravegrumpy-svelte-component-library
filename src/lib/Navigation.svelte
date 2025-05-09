<script lang="ts">
    import NavButton from "./NavButton.svelte";

    interface Props {}

    const { slug } = $props();

    let i = $state(1)
    const links = [
        {
            id: i++,
            href: "/",
            text: "Home",
        },
        {
            id: i++,
            href: '/about',
            text: 'About'
        }
    ];
</script>

<nav class="flex flex-col lg:flex-row gap-3">
    {#each links as link (link.id)}
        <NavButton slug={slug} href={link.href} text={link.text} />
    {/each}
</nav>