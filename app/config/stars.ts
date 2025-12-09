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
		cx: 75,
		cy: 15,
		size: 30,
		duration: 25,
		startAngle: 0,
		gradient: 1,
	},
	{
		id: "star2",
		cx: 25,
		cy: 70,
		size: 20,
		duration: 35,
		startAngle: 120,
		gradient: 2,
	},
	{
		id: "star3",
		cx: 60,
		cy: 80,
		size: 25,
		duration: 40,
		startAngle: 240,
		gradient: 1,
	},
	{
		id: "star4",
		cx: 80,
		cy: 50,
		size: 18,
		duration: 30,
		startAngle: 90,
		gradient: 3,
	},
	{
		id: "star5",
		cx: 15,
		cy: 20,
		size: 22,
		duration: 45,
		startAngle: 180,
		gradient: 2,
	},
	{
		id: "star6",
		cx: 40,
		cy: 30,
		size: 24,
		duration: 38,
		startAngle: 270,
		gradient: 3,
	},
];
