import { browser } from '$app/environment';
import { getExercise, getExerciseLogs } from '$lib/services/exercises.js';

export async function load({ params }) {
    if (!browser) return;
    
    const { id } = params;

    let exercise = getExercise(id);
    let logs = getExerciseLogs(id);

    return { exercise, logs };
}