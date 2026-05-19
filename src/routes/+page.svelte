<script lang="ts">
import clsx from "clsx";
import { browser } from "$app/environment";
import { themeStore } from "$lib/stores/theme.svelte";

let imagesLoaded = $state(false);
let showGreeting = $state(true);
let mounted = $state(false);

function getGreeting(theme: "light" | "dark"): string {
	const hour = new Date().getHours();
	const expectedTheme = hour >= 5 && hour < 12 ? "light" : "dark";

	if (theme === expectedTheme) {
		if (hour >= 5 && hour < 12) return "Good Morning";
		if (hour >= 12 && hour < 17) return "Good Afternoon";
		if (hour >= 17 && hour < 21) return "Good Evening";
		if ((hour >= 21 && hour <= 23) || hour === 0) return "Good Night";
		return "ZzzZzz";
	}

	return theme === "light" ? "Good Morning" : "Good Evening";
}

const greeting = $derived(mounted ? getGreeting(themeStore.theme) : "");

$effect(() => {
	if (!browser) return;
	mounted = true;

	const darkImage = new Image();
	const lightImage = new Image();

	let loadedCount = 0;
	const onLoad = () => {
		loadedCount++;
		if (loadedCount === 2) {
			imagesLoaded = true;
		}
	};

	darkImage.onload = onLoad;
	lightImage.onload = onLoad;
	darkImage.src = "/night-owl.svg";
	lightImage.src = "/day-owl.svg";
});

$effect(() => {
	// Show greeting for 2 seconds when theme changes
	themeStore.theme;
	if (!mounted) return;
	showGreeting = true;
	const timer = setTimeout(() => {
		showGreeting = false;
	}, 2000);
	return () => clearTimeout(timer);
});
</script>

<div class="flex justify-center items-center flex-1 flex-col md:flex-row space-y-4 md:space-x-4">
	<div class="relative">
		<div
			class={clsx("absolute left-1/2 -translate-x-1/2 transition-all duration-500 z-10", {
				"opacity-100 -top-8": showGreeting && mounted,
				"opacity-0 -top-12 pointer-events-none": !showGreeting || !mounted,
			})}
		>
			<div
				class="relative px-4 py-2 rounded-2xl shadow-lg bg-amber-100 text-amber-900 dark:bg-indigo-900 dark:text-indigo-100"
			>
				<p class="text-lg sm:text-xl font-medium whitespace-nowrap">
					{greeting}
				</p>
				<div class="speech-pointer absolute left-1/2 -translate-x-1/2"></div>
			</div>
		</div>

		<div class="relative w-[200px] h-[200px]">
			<img
				class={clsx(
					"rounded-full absolute inset-0 transition-opacity duration-500",
					imagesLoaded ? "opacity-0 dark:opacity-100" : "opacity-0",
				)}
				src="/night-owl.svg"
				alt="owl"
				width="200"
				height="200"
			/>
			<img
				class={clsx(
					"rounded-full absolute inset-0 transition-opacity duration-500",
					imagesLoaded ? "opacity-100 dark:opacity-0" : "opacity-0",
				)}
				src="/day-owl.svg"
				alt="owl"
				width="200"
				height="200"
			/>
		</div>
	</div>

	<div class="space-y-2">
		<p class="text-base sm:text-xl md:text-2xl xl:text-3xl">Hello,</p>
		<h1 class="text-4xl sm:text-6xl md:text-7xl xl:text-8xl">
			I'm <span class="font-semibold">Jec Castaños</span>
		</h1>
		<p class="text-lg sm:text-2xl md:text-3xl xl:text-4xl">Fullstack Developer</p>
	</div>
</div>

<style>
	.speech-pointer {
		bottom: -8px;
		width: 0;
		height: 0;
		border-left: 10px solid transparent;
		border-right: 10px solid transparent;
		border-top: 10px solid rgb(254 243 199);
	}

	:global(.dark) .speech-pointer {
		border-top-color: rgb(49 46 129);
	}
</style>
