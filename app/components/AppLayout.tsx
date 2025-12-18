"use client";

import classNames from "classnames";
import { useEffect } from "react";
import { useThemeStore } from "../store/themeStore";
import BackgroundOrb from "./BackgroundOrb";
import Footer from "./Footer";
import Header from "./Header";

interface Props {
	children: React.ReactNode;
}

export default function AppLayout({ children }: Props) {
	const theme = useThemeStore((state) => state.theme);
	const initializeTheme = useThemeStore((state) => state.initializeTheme);

	useEffect(() => {
		initializeTheme();
	}, [initializeTheme]);

	if (theme === null) return null;

	return (
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
	);
}
