import { writable } from "svelte/store";
import { defaultExercise, type Exercise } from "$lib/interfaces/exercise";
import { defaultSet, type Set } from "$lib/interfaces/set";
import { getAuthorizationHeader } from "./authentication";

export const workoutState = {
    inWorkout: false,
    currentExercise: writable<Exercise>(defaultExercise),

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
    workoutState.completedSets.get(exercise.name)?.push({ ...defaultSet });
    return workoutState.completedSets.get(exercise.name)!;
}

export function logWorkout() {
    const completedDate = new Date();
    console.log(completedDate);

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
        body: JSON.stringify({
            date: completedDate,
            exercises: completedExercises,
        }),
    }).then((response) => response.text().then(console.log));
}