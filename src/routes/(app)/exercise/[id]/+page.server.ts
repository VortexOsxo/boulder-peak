import { getExercise, getExerciseLogs } from '$lib/services/exercises.js';

export async function load({ params }) {
    const { id } = params;

    let exercise = getExercise(id);
    let logs = getExerciseLogs(id);

    return { exercise, logs };
}