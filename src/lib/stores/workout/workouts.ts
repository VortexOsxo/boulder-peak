import type { Workout } from "$lib/interfaces/workout";
import { get, writable } from "svelte/store";

function createWorkouts() {
    const workouts = writable<Workout[]>([]);
    
    async function fetchWorkouts() {
        await fetch('/api/workouts', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => response.json()).then((datas) => {
            datas.map((workout: any) => {
                const { _id, ...w } = { id: String(workout._id), ...workout };
                return w;
            });
            workouts.set(datas);
        });
    }

    return { ...workouts, fetch: fetchWorkouts };
}

export const workouts = createWorkouts();

export function getLog(id: string) {
    return get(workouts).find((workout: any) => workout.id === id);
}