<script lang="ts">
import { themeStore } from "$lib/stores/theme.svelte";
</script>

<button
	type="button"
	class="text-2xl h-8 w-8 outline-0 relative transition-transform hover:scale-110 active:scale-95"
	onclick={() => themeStore.toggle()}
	aria-label={`Switch to ${themeStore.theme === "dark" ? "light" : "dark"} mode`}
>
	<div
		class="absolute inset-0 transition-all duration-300 opacity-0 rotate-180 dark:opacity-100 dark:rotate-0"
	>
		🌙
	</div>
	<div
		class="absolute inset-0 transition-all duration-300 opacity-100 rotate-0 dark:opacity-0 dark:-rotate-180"
	>
		☀️
	</div>
</button>
