import { writable } from "svelte/store";
import { type ExerciseTarget } from "$lib/interfaces/exercise";
import { type Set } from "$lib/interfaces/set";
import { stopTimer } from "./workout-timer";


export const currentExercise = writable<ExerciseTarget>();
let completedSets = new Map<string, Set[]>();

export function initializeSets(target: ExerciseTarget): Set[] {
    let id = target.exercise.id;
    if (!completedSets.has(id)) {
        completedSets.set(id, []);
        for (let i = 0; i < target.sets; i++) {
            addSet(target);
        }
    }

    return completedSets.get(id)!;
}

export function addSet(target: ExerciseTarget): Set[] {
    let id = target.exercise.id;
    completedSets.get(id)?.push({ weight: target.weight, reps: target.reps, done: false });
    return completedSets.get(id)!;
}

export function logWorkout() {
    const date = new Date();

    const duration = stopTimer();

    let completedExercises = [];
    for (let [exercise, sets] of completedSets) {
        let completedExercise = {
            id: exercise,
            sets: sets.filter((set) => set.done).map(set => ({
                weight: set.weight,
                reps: set.reps,
            })),
        };
        if (!completedExercise.sets.length) continue;
        completedExercises.push(completedExercise);
    }

    fetch(`/api/workouts/`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, duration, exercises: completedExercises, }),
    });
}
