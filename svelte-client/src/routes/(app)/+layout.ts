import { browser } from '$app/environment';
import { completedWorkouts } from '$lib/stores/workout/completed-workouts.js';
import { workoutSchemas } from '$lib/stores/workout/workout-schema.js';

export async function load({ fetch}) {
    if(!browser) return;

    fetch('/api/workout-schemas', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => response.json()).then(workoutSchemas.set);

    fetch('/api/workouts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((response) => response.json()).then(completedWorkouts.set);
}