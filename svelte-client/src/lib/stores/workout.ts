import { writable } from "svelte/store";
import type { Exercise } from "$lib/interfaces/exercise";
import { defaultSet, type Set } from "$lib/interfaces/set";

export const workoutState = {
    inWorkout: false,
    currentExercise: writable<Exercise>({name: "", reps: 0, sets: 0, weight: 0}),

    completedSets: new Map<string, Set[]>(),
};

export function initializeSets(exercise: Exercise): Set[] {
    if (!workoutState.completedSets.has(exercise.name)) {
        workoutState.completedSets.set(exercise.name, []);
        for (let i = 0; i < exercise.sets; i++) {
            addSet(exercise);
        }
    }

    return workoutState.completedSets.get(exercise.name)!;
}

export function addSet(exercise: Exercise): Set[] {
    workoutState.completedSets.get(exercise.name)?.push({...defaultSet});
    return workoutState.completedSets.get(exercise.name)!;
}