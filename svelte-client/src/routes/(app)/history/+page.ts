import { completedWorkouts } from "$lib/stores/workout/completed-workouts";
import { get } from "svelte/store";

export async function load() {
    let workouts = get(completedWorkouts).map((workout: any) => {
        const { _id, ...w } = { id: String(workout._id), ...workout };
        return w;
    });

    let totalVolume = 0;
    workouts.forEach(workout => {
        totalVolume += workout.exercises.reduce(
            (acc: number, exercise: any) => acc + exercise.sets.reduce(
                (acc: number, set: any) => acc + set.weight * set.reps, 0
            ), 0
        );
    });

    let totalWorkouts = workouts.length;

    return { workouts, totalVolume, totalWorkouts };
}