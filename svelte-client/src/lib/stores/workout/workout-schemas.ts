import { writable } from "svelte/store";
import type { WorkoutSchema } from "$lib/interfaces/workout-schema";

function createWorkoutSchema() {
    const workoutSchemas = writable<WorkoutSchema[]>([]);

    async function fetchWorkoutSchemas() {
        await fetch('/api/workout-schemas', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => response.json()).then(workoutSchemas.set);
    }

    return { ...workoutSchemas, fetch: fetchWorkoutSchemas };
}

export const workoutSchemas = createWorkoutSchema();