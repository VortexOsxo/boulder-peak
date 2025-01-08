import { browser } from '$app/environment';
import { workouts } from '$lib/stores/workout/workouts.js';
import { workoutSchemas } from '$lib/stores/workout/workout-schemas.js';

export async function load({fetch}) {
    if(!browser) return;

    workoutSchemas.fetch(fetch);
    workouts.fetch(fetch);
}