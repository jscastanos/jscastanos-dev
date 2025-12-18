"use client";

import { useThemeStore } from "../store/themeStore";
import ModeSwitcher from "./ModeSwitcher";

export default function Header() {
	const theme = useThemeStore((state) => state.theme);
	const toggleTheme = useThemeStore((state) => state.toggleTheme);

	if (theme === null) return null;

	return (
		<header className="h-16 flex justify-end items-center">
			<ModeSwitcher theme={theme} setTheme={toggleTheme} />
		</header>
	);
}
