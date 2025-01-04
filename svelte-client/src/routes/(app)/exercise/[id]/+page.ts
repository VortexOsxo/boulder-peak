import { fetchExercise, fetchExerciseLogs } from '$lib/stores/exercices';

export async function load({fetch, params}) {
    const { id } = params;

    let exercise = await fetchExercise(id, fetch);
    let logs = await fetchExerciseLogs(id, fetch);

    return { exercise, logs };
}