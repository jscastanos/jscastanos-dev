import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Theme } from "../types/theme";

interface ThemeState {
	theme: Theme | null;
	initializeTheme: () => void;
	toggleTheme: (newTheme: Theme) => void;
}

export const useThemeStore = create<ThemeState>()(
	persist(
		(set, get) => ({
			theme: null,

			initializeTheme: () => {
				const { theme } = get();

				// If no theme stored, set initial time-based theme
				if (theme === null) {
					const hour = new Date().getHours();
					const isDay = hour >= 5 && hour < 12;
					set({
						theme: isDay ? "light" : "dark",
					});
				}
			},

			toggleTheme: (newTheme: Theme) => {
				set({
					theme: newTheme,
				});
			},
		}),
		{
			name: "theme-storage",
		},
	),
);
