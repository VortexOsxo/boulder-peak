import { workouts } from "$lib/stores/workout/workouts";
import { get } from "svelte/store";

export async function load() {
    let totalVolume = 0;
    get(workouts).forEach(workout => {
        totalVolume += workout.exercises.reduce(
            (acc: number, exercise: any) => acc + exercise.sets.reduce(
                (acc: number, set: any) => acc + set.weight * set.reps, 0
            ), 0
        );
    });

    let totalWorkouts = get(workouts).length;

    return { workouts, totalVolume, totalWorkouts };
}