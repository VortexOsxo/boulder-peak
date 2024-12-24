import { writable } from "svelte/store";
import type { Exercise } from "$lib/interfaces/exercise";

export const workoutState = {
    inWorkout: false,
    currentExercise: writable<Exercise>({name: "", reps: 0, sets: 0, weight: 0}),
};