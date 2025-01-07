import { get, writable } from "svelte/store";

export const completedWorkouts = writable([]);

export function getLog(id: string) {
    return get(completedWorkouts).find((workout: any) => workout.id === id);
}