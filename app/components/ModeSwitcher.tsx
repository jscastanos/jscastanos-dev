"use client";

import classNames from "classnames";
import type { Theme } from "../types/theme";

interface Props {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export default function ModeSwitcher({ theme, setTheme }: Props) {
	function handleMode() {
		const nextTheme = theme === "dark" ? "light" : "dark";

		// set mode to local storage
		localStorage.setItem("theme", nextTheme);
		setTheme(nextTheme);
	}

	return (
		<button
			type="button"
			className="text-2xl h-8 w-8 outline-0 relative transition-transform hover:scale-110 active:scale-95"
			onClick={handleMode}
			aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
		>
			<div
				className={classNames("absolute inset-0 transition-all duration-300", {
					"opacity-100 rotate-0": theme === "dark",
					"opacity-0 rotate-180": theme !== "dark",
				})}
			>
				🌙
			</div>
			<div
				className={classNames("absolute inset-0 transition-all duration-300", {
					"opacity-100 rotate-0": theme === "light",
					"opacity-0 -rotate-180": theme !== "light",
				})}
			>
				☀️
			</div>
		</button>
	);
}
