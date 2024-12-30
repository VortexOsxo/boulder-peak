import { writable } from "svelte/store";
import { defaultExercise, type Exercise, type ExerciseTarget } from "$lib/interfaces/exercise";
import { defaultSet, type Set } from "$lib/interfaces/set";
import { getAuthorizationHeader } from "./authentication";
import { stopTimer } from "./workout-timer";

export const workoutState = {
    inWorkout: false,
    currentExercise: writable<ExerciseTarget>(),
    completedSets: new Map<string, Set[]>(),
};

export function initializeSets(target: ExerciseTarget): Set[] {
    console.log(target);
    let name = target.exercise.name;
    if (!workoutState.completedSets.has(name)) {
        workoutState.completedSets.set(name, []);
        for (let i = 0; i < target.sets; i++) {
            addSet(target);
        }
    }

    return workoutState.completedSets.get(name)!;
}

export function addSet(target: ExerciseTarget): Set[] {
    let name = target.exercise.name;
    workoutState.completedSets.get(name)?.push({ weight: target.weight, reps: target.reps, done: false });
    return workoutState.completedSets.get(name)!;
}

export function logWorkout() {
    const date = new Date();

    const duration = stopTimer();

    let completedExercises = [];
    for (let [exercise, sets] of workoutState.completedSets) {
        let completedExercise = {
            name: exercise,
            sets: sets.filter((set) => set.done).map(set => ({
                weight: set.weight,
                reps: set.reps,
            })),
        };
        if (!completedExercise.sets.length) continue;
        completedExercises.push(completedExercise);
    }

    fetch("http://127.0.0.1:5000/workout/", {
        method: "POST",
        headers: { Authorization: getAuthorizationHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ date, duration, exercises: completedExercises, }),
    });
}
