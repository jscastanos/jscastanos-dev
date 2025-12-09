"use client";

import classNames from "classnames";
import { createContext, useEffect, useState } from "react";
import type { Theme, ThemeContextProps } from "../types/theme";
import BackgroundOrb from "./BackgroundOrb";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
	children: React.ReactNode;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export default function AppLayout({ children }: Props) {
	const [theme, setTheme] = useState<Theme | null>(null);

	useEffect(() => {
		const localTheme = localStorage.getItem("theme") as Theme | null;

		if (localTheme !== null) {
			setTheme(localTheme);
		} else {
			setTheme("dark");
		}
	}, []);

	if (theme === null) return null;

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme: setTheme }}>
			<main
				className={classNames(
					"w-screen h-screen flex flex-col transition-colors duration-500 relative",
					{
						"bg-stone-100 text-neutral-800": theme === "light",
						"bg-slate-800 text-white": theme === "dark",
					},
				)}
			>
				<BackgroundOrb theme={theme} />
				<div className="h-full w-[90%] mx-auto flex flex-col relative z-10">
					<Header />
					{children}
					<Footer />
				</div>
			</main>
		</ThemeContext.Provider>
	);
}
