<script lang="ts">
	import type { SvelteHTMLElements } from 'svelte/elements';
	type SvelteDivElement = SvelteHTMLElements['div'];
	interface Props extends SvelteDivElement {
		pageTitle: string;
		pageSubtitle: string;
	}
	let { pageTitle, pageSubtitle, class: titleClasses }: Props = $props();
</script>

<div
	class="bg:bg-bravegrumpy-accent2a bg:text-bravegrumpy-logoPurple bg:dark:bg-affair bg:dark:text-bravegrumpy-accent1a bg:w-fit bg:px-20 bg:py-5 bg:border-2 bg:border-solid bg:rounded-md bg:flex bg:flex-col bg:gap-5 bg:content-center bg:shadow-light bg:dark:shadow-dark bg:col-start-2 bg:col-end-4 bg:row-start-2 {titleClasses}"
>
	<h2 class="bg:font-pageTitle bg:text-5xl">{pageTitle}</h2>
	<p class="bg:font-pageSubtitle bg:self-center bg:text-2xl bg:hidden bg:xl:block">
		{pageSubtitle}
	</p>
</div>

<!--TODO: #12 Continue translating css into tailwind-->
<!--TODO: #13 Separate each "type" of styling into an input-->
<!--TODO: #14 Figure out how to do the layered positioning -->
<!--TODO: #15 Ignore positioning for story-->

<!-- <div class="bg:bg-bravegrumpy-accent2a bg:text-bravegrumpy-logoPurple bg:shadow-xl bg:dark:bg-bravegrumpy-brand6 bg:dark:text-bravegrumpy-accent1a">
	<h2 class="bg:font-pageTitle">{pageTitle}</h2>
	<p class="bg:font-pageSubtitle">{pageSubtitle}</p>
</div> -->

<!-- <style>
  div {
    width: 40rem;
    height: 8rem;
    border: 2px solid;
    border-radius: 5px;
    position: absolute;
    top: 40%;
    left: 50%;
    text-align: center;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: -1rem;
    box-shadow: var(--boxShadowLight);
    background-blend-mode: hue;
  }
  :global(.dark) div {
    box-shadow: var(--boxShadowDark);
  }
  h2 {
    font-size: 3rem;
  }
  p {
    font-size: 1.5rem;
    margin-top: -0.5rem;
  }

  @media screen and (max-width: 1000px) {
    div {
      width: fit-content;
      height: fit-content;
      padding: 0px 50px;
      position: static;
    }
    p {
      display: none;
    }
  }
</style> -->
