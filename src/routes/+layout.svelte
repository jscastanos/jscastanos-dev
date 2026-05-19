<script lang="ts">
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "../app.css";
import type { Snippet } from "svelte";
import AppLayout from "$lib/components/AppLayout.svelte";

interface Props {
	children: Snippet;
}

const { children }: Props = $props();
</script>

<svelte:head>
	<title>Jec Castanos - Fullstack Developer</title>
	<meta
		name="description"
		content="Hi, I'm Jec Castanos. I am a fullstack developer from the Philippines with over 5 years of experience in web and software development. I am passionate about building user-friendly and visually appealing web applications. I am also an expert in performance optimization and code quality. In my spare time, I enjoy learning new technologies, playing video games, and spending time with my family and friends. I am always looking for new opportunities to challenge myself and grow as an developer. If you are looking for a fullstack developer with a proven track record of success, I would love to hear from you."
	/>
	<meta name="author" content="Jec Castanos" />
	<link rel="author" href="https://github.com/jscastanos" />
	<link rel="icon" href="https://www.jscastanos.dev/day-owl.svg" />

	<meta property="og:title" content="Jec Castanos - Fullstack Developer" />
	<meta
		property="og:description"
		content="Fullstack developer from the Philippines with over 5 years of experience in web and software development."
	/>
	<meta property="og:image" content="https://www.jscastanos.dev/day-owl.svg" />
	<meta property="og:image:alt" content="Jec Castanos - Day Owl" />
	<meta property="og:image" content="https://www.jscastanos.dev/night-owl.svg" />
	<meta property="og:image:alt" content="Jec Castanos - Night Owl" />

	<style>
		body {
			font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
		}
	</style>
</svelte:head>

<AppLayout>
	{@render children()}
</AppLayout>
