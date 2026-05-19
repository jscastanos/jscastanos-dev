import { browser } from "$app/environment";
import type { Theme } from "$lib/types/theme";

const STORAGE_KEY = "theme-storage";

function readInitialTheme(): Theme {
	if (!browser) return "light";

	const fromAttr = document.documentElement.dataset.theme;
	if (fromAttr === "light" || fromAttr === "dark") {
		return fromAttr;
	}

	try {
		const raw = localStorage.getItem(STORAGE_KEY);
		if (raw) {
			const parsed = JSON.parse(raw);
			const stored = parsed?.state?.theme ?? parsed?.theme;
			if (stored === "light" || stored === "dark") {
				return stored;
			}
		}
	} catch {
		// fall through to time-based default
	}

	const hour = new Date().getHours();
	return hour >= 5 && hour < 12 ? "light" : "dark";
}

function persist(theme: Theme): void {
	if (!browser) return;
	try {
		localStorage.setItem(STORAGE_KEY, JSON.stringify({ theme }));
		document.documentElement.dataset.theme = theme;
		document.documentElement.classList.toggle("dark", theme === "dark");
	} catch {
		// localStorage may be unavailable (private mode, quota)
	}
}

function createThemeStore() {
	let current = $state<Theme>(readInitialTheme());

	return {
		get theme(): Theme {
			return current;
		},
		set(next: Theme): void {
			current = next;
			persist(next);
		},
		toggle(): void {
			const next: Theme = current === "dark" ? "light" : "dark";
			current = next;
			persist(next);
		},
	};
}

export const themeStore = createThemeStore();
