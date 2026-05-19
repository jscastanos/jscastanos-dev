/**
 * Creates an SVG path for a 5-pointed star
 * @param cx - Center X coordinate (in viewBox coordinates)
 * @param cy - Center Y coordinate (in viewBox coordinates)
 * @param size - Size of the star (outer radius)
 * @returns SVG path string
 */
export function createStarPath(cx: number, cy: number, size: number): string {
	const points = 5;
	const outerRadius = size;
	const innerRadius = size * 0.4;
	const coords: string[] = [];

	for (let i = 0; i < points * 2; i++) {
		const radius = i % 2 === 0 ? outerRadius : innerRadius;
		const angle = (Math.PI * i) / points - Math.PI / 2;
		const x = cx + radius * Math.cos(angle);
		const y = cy + radius * Math.sin(angle);
		coords.push(`${i === 0 ? "M" : "L"} ${x},${y}`);
	}
	return `${coords.join(" ")} Z`;
}
