"use client";
import classNames from "classnames";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./components/AppLayout";

export default function Home() {
	const context = useContext(ThemeContext);
	const [imagesLoaded, setImagesLoaded] = useState(false);
	const [showGreeting, setShowGreeting] = useState(true);

	const theme = context?.theme;

	useEffect(() => {
		// Preload both images
		const darkImage = new window.Image();
		const lightImage = new window.Image();

		let loadedCount = 0;
		const onLoad = () => {
			loadedCount++;
			if (loadedCount === 2) {
				setImagesLoaded(true);
			}
		};

		darkImage.onload = onLoad;
		lightImage.onload = onLoad;
		darkImage.src = "/night-owl.svg";
		lightImage.src = "/day-owl.svg";
	}, []);

	useEffect(() => {
		// Show greeting for 2 seconds when theme changes
		if (theme) {
			setShowGreeting(true);
			const timer = setTimeout(() => {
				setShowGreeting(false);
			}, 2000);

			return () => clearTimeout(timer);
		}
	}, [theme]);

	if (context === null) return null;

	return (
		<div className="flex justify-center items-center flex-1 flex-col md:flex-row space-y-4 md:space-x-4">
			<div className="relative">
				{/* Speech bubble - floating above */}
				<div
					className={classNames(
						"absolute left-1/2 -translate-x-1/2 transition-all duration-500 z-10",
						{
							"opacity-100 -top-8": showGreeting,
							"opacity-0 -top-12 pointer-events-none": !showGreeting,
						},
					)}
				>
					<div
						className={classNames("relative px-4 py-2 rounded-2xl shadow-lg", {
							"bg-amber-100 text-amber-900": theme === "light",
							"bg-indigo-900 text-indigo-100": theme === "dark",
						})}
					>
						<p className="text-lg sm:text-xl font-medium whitespace-nowrap">
							{theme === "light" ? "Good Morning" : "Good Night"}
						</p>
						{/* Speech bubble pointer */}
						<div
							className="absolute left-1/2 -translate-x-1/2"
							style={{
								bottom: "-8px",
								width: 0,
								height: 0,
								borderLeft: "10px solid transparent",
								borderRight: "10px solid transparent",
								borderTop:
									theme === "light"
										? "10px solid rgb(254 243 199)"
										: "10px solid rgb(49 46 129)",
							}}
						/>
					</div>
				</div>
				{/* Owl image */}
				<div className="relative w-[200px] h-[200px]">
					{/* Dark theme image */}
					<Image
						className={classNames(
							"rounded-full absolute inset-0 transition-opacity duration-500",
							{
								"opacity-100": theme === "dark" && imagesLoaded,
								"opacity-0": theme !== "dark" || !imagesLoaded,
							},
						)}
						src="/night-owl.svg"
						alt="owl"
						width={200}
						height={200}
						priority
					/>
					{/* Light theme image */}
					<Image
						className={classNames(
							"rounded-full absolute inset-0 transition-opacity duration-500",
							{
								"opacity-100": theme === "light" && imagesLoaded,
								"opacity-0": theme !== "light" || !imagesLoaded,
							},
						)}
						src="/day-owl.svg"
						alt="owl"
						width={200}
						height={200}
						priority
					/>
				</div>
			</div>
			<div className="space-y-2">
				<p className="text-base sm:text-xl md:text-2xl xl:text-3xl">Hello,</p>
				<h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl">
					I'm <span className="font-semibold ">Jec Castaños</span>
				</h1>
				<p className="text-lg sm:text-2xl md:text-3xl xl:text-4xl">
					Fullstack Developer
				</p>
			</div>
		</div>
	);
}
