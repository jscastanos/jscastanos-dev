"use client";

import { useContext } from "react";
import { ThemeContext } from "./AppLayout";
import ModeSwitcher from "./ModeSwitcher";

export default function Header() {
	const context = useContext(ThemeContext);

	if (context === null) return null;

	const { theme, toggleTheme } = context;

	return (
		<header className="h-16 flex justify-end items-center">
			<ModeSwitcher theme={theme} setTheme={toggleTheme} />
		</header>
	);
}
