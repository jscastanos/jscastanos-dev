export interface Star {
	id: string;
	cx: number;
	cy: number;
	size: number;
	duration: number;
	startAngle: number;
	gradient: number;
}

export const stars: Star[] = [
	{
		id: "star1",
		cx: 80,
		cy: 20,
		size: 30,
		duration: 30,
		startAngle: 0,
		gradient: 1,
	},
	{
		id: "star2",
		cx: 15,
		cy: 55,
		size: 22,
		duration: 40,
		startAngle: 120,
		gradient: 2,
	},
	{
		id: "star3",
		cx: 50,
		cy: 85,
		size: 26,
		duration: 50,
		startAngle: 240,
		gradient: 3,
	},
];
