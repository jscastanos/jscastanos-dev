"use client";

import { stars } from "../config/stars";
import type { Theme } from "../types/theme";
import { createStarPath } from "../utils/createStarPath";

interface Props {
	theme: Theme;
}

export default function BackgroundOrb({ theme }: Props) {
	const gradientPrefix = theme === "light" ? "sun" : "moon";

	return (
		<div className="absolute inset-0 overflow-hidden pointer-events-none">
			<svg
				className="absolute inset-0 w-full h-full"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 100 100"
				preserveAspectRatio="none"
				aria-hidden="true"
				style={{ willChange: "transform" }}
			>
				<title>Decorative background stars</title>
				<defs>
					{/* Light theme gradients */}
					<radialGradient id="sunGradient1" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="#f59e0b" stopOpacity="0.8" />
						<stop offset="50%" stopColor="#f97316" stopOpacity="0.5" />
						<stop offset="100%" stopColor="#ea580c" stopOpacity="0" />
					</radialGradient>
					<radialGradient id="sunGradient2" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="#f97316" stopOpacity="0.7" />
						<stop offset="50%" stopColor="#fb923c" stopOpacity="0.45" />
						<stop offset="100%" stopColor="#f97316" stopOpacity="0" />
					</radialGradient>
					<radialGradient id="sunGradient3" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="#ea580c" stopOpacity="0.75" />
						<stop offset="50%" stopColor="#dc2626" stopOpacity="0.48" />
						<stop offset="100%" stopColor="#b91c1c" stopOpacity="0" />
					</radialGradient>

					{/* Dark theme gradients */}
					<radialGradient id="moonGradient1" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="#60a5fa" stopOpacity="0.5" />
						<stop offset="50%" stopColor="#6366f1" stopOpacity="0.3" />
						<stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
					</radialGradient>
					<radialGradient id="moonGradient2" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="#a78bfa" stopOpacity="0.4" />
						<stop offset="50%" stopColor="#3b82f6" stopOpacity="0.25" />
						<stop offset="100%" stopColor="#2563eb" stopOpacity="0" />
					</radialGradient>
					<radialGradient id="moonGradient3" cx="50%" cy="50%" r="50%">
						<stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.45" />
						<stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.28" />
						<stop offset="100%" stopColor="#0284c7" stopOpacity="0" />
					</radialGradient>

					{/* Reduced blur filter for better performance */}
					<filter id="blur">
						<feGaussianBlur in="SourceGraphic" stdDeviation="15" />
					</filter>
				</defs>

				{/* Only render stars for current theme */}
				{stars.map((star) => (
					<g key={star.id} transform-origin="center" style={{ willChange: "transform" }}>
						<animateTransform
							attributeName="transform"
							type="rotate"
							from={`${star.startAngle}`}
							to={`${star.startAngle + 360}`}
							dur={`${star.duration}s`}
							repeatCount="indefinite"
						/>
						<path
							d={createStarPath(star.cx, star.cy, star.size)}
							fill={`url(#${gradientPrefix}Gradient${star.gradient})`}
							filter="url(#blur)"
						/>
					</g>
				))}
			</svg>
		</div>
	);
}
