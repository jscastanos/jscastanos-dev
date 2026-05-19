<script lang="ts">
import type { Snippet } from "svelte";
import BackgroundOrb from "$lib/components/BackgroundOrb.svelte";
import Footer from "$lib/components/Footer.svelte";
import Header from "$lib/components/Header.svelte";

interface Props {
	children: Snippet;
}

const { children }: Props = $props();
</script>

<main
	class="w-screen h-screen flex flex-col transition-colors duration-500 relative bg-stone-100 text-neutral-800 dark:bg-slate-800 dark:text-white"
>
	<BackgroundOrb />
	<div class="h-full w-[90%] mx-auto flex flex-col relative z-10">
		<Header />
		{@render children()}
		<Footer />
	</div>
</main>
