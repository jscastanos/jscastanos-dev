<script lang="ts">
import { stars } from "$lib/config/stars";
import { createStarPath } from "$lib/utils/createStarPath";
</script>

<div class="absolute inset-0 overflow-hidden pointer-events-none">
	<svg
		class="absolute inset-0 w-full h-full"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 100 100"
		preserveAspectRatio="none"
		aria-hidden="true"
		style="will-change: transform"
	>
		<title>Decorative background stars</title>
		<defs>
			<radialGradient id="sunGradient1" cx="50%" cy="50%" r="50%">
				<stop offset="0%" stop-color="#f59e0b" stop-opacity="0.8" />
				<stop offset="50%" stop-color="#f97316" stop-opacity="0.5" />
				<stop offset="100%" stop-color="#ea580c" stop-opacity="0" />
			</radialGradient>
			<radialGradient id="sunGradient2" cx="50%" cy="50%" r="50%">
				<stop offset="0%" stop-color="#f97316" stop-opacity="0.7" />
				<stop offset="50%" stop-color="#fb923c" stop-opacity="0.45" />
				<stop offset="100%" stop-color="#f97316" stop-opacity="0" />
			</radialGradient>
			<radialGradient id="sunGradient3" cx="50%" cy="50%" r="50%">
				<stop offset="0%" stop-color="#ea580c" stop-opacity="0.75" />
				<stop offset="50%" stop-color="#dc2626" stop-opacity="0.48" />
				<stop offset="100%" stop-color="#b91c1c" stop-opacity="0" />
			</radialGradient>

			<radialGradient id="moonGradient1" cx="50%" cy="50%" r="50%">
				<stop offset="0%" stop-color="#60a5fa" stop-opacity="0.5" />
				<stop offset="50%" stop-color="#6366f1" stop-opacity="0.3" />
				<stop offset="100%" stop-color="#4f46e5" stop-opacity="0" />
			</radialGradient>
			<radialGradient id="moonGradient2" cx="50%" cy="50%" r="50%">
				<stop offset="0%" stop-color="#a78bfa" stop-opacity="0.4" />
				<stop offset="50%" stop-color="#3b82f6" stop-opacity="0.25" />
				<stop offset="100%" stop-color="#2563eb" stop-opacity="0" />
			</radialGradient>
			<radialGradient id="moonGradient3" cx="50%" cy="50%" r="50%">
				<stop offset="0%" stop-color="#7dd3fc" stop-opacity="0.45" />
				<stop offset="50%" stop-color="#0ea5e9" stop-opacity="0.28" />
				<stop offset="100%" stop-color="#0284c7" stop-opacity="0" />
			</radialGradient>

			<filter id="blur">
				<feGaussianBlur in="SourceGraphic" stdDeviation="15" />
			</filter>
		</defs>

		<g class="theme-sun">
			{#each stars as star (star.id)}
				<g transform-origin="center" style="will-change: transform">
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
						fill={`url(#sunGradient${star.gradient})`}
						filter="url(#blur)"
					/>
				</g>
			{/each}
		</g>

		<g class="theme-moon">
			{#each stars as star (star.id)}
				<g transform-origin="center" style="will-change: transform">
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
						fill={`url(#moonGradient${star.gradient})`}
						filter="url(#blur)"
					/>
				</g>
			{/each}
		</g>
	</svg>
</div>

<style>
	:global(.dark) .theme-sun {
		display: none;
	}

	:global(html:not(.dark)) .theme-moon {
		display: none;
	}
</style>
