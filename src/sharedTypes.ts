export type Recipe = {
	name: string,
	totalPrepTime: string,
	prepTimeUnit: Date,
	link? : string, 
}

export type AppState = {
	turkeyTime: Date | null,
	recipes: Array<Recipe> | null,
}