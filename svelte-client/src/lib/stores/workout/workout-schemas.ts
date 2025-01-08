import { writable } from "svelte/store";
import type { WorkoutSchema } from "$lib/interfaces/workout-schema";

export const workoutSchemas = writable<WorkoutSchema[]>([]);

