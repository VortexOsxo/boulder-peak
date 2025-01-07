import { getLog } from '$lib/stores/workout/completed-workouts.js';

export async function load({params}) {
    const { id } = params;
    let workout = getLog(id);
    return { workout };
}