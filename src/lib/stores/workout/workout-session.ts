import type { Set } from "$lib/interfaces/set";
import { get, writable } from "svelte/store";
import { createSessionTimer } from "../sessions/session-timer";
import type { ExerciseTarget } from "$lib/interfaces/exercise";
import { workoutDetails } from "./workout-details";

function initializeWorkoutSession() {
    const timer = createSessionTimer();
    const completedSets = new Map<ExerciseTarget, Set[]>();
    
    const currentExercise = writable<ExerciseTarget>();
    const currentSets = writable<Set[]>();

    function addSet() {
        let current = get(currentExercise);
        currentSets.update((sets) => {
            sets.push({ weight: current.weight, reps: current.reps, done: false });
            return sets;
        });
    }

    function setExercise(target: ExerciseTarget) {
        let current = get(currentExercise);
        if (current) completedSets.set(current, get(currentSets));
        currentExercise.set(target);
        currentSets.set(completedSets.get(target)!);
    }

    async function logWorkout() {
        const date = new Date();

        const duration = timer.stop();

        let completedExercises = [];
        for (let [target, sets] of completedSets) {
            let completedExercise = {
                id: target.exercise.id,
                sets: sets.filter((set) => set.done).map(set => ({
                    weight: set.weight,
                    reps: set.reps,
                })),
            };
            if (!completedExercise.sets.length) continue;
            completedExercises.push(completedExercise);
        }

        await fetch(`/api/workouts/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date, duration, exercises: completedExercises, }),
        });
    }

    return { timer, currentExercise, currentSets, completedSets, addSet, logWorkout, setExercise }
}

export const workoutSession = initializeWorkoutSession();

export function startWorkoutSession() {
    workoutSession.completedSets.clear();
    workoutSession.timer.reset();

    const targets = get(workoutDetails.targets);
    targets.forEach((target) => {
        const sets = []
        for (let i = 0; i < target.sets; i++) {
            sets.push({ weight: target.weight, reps: target.reps, done: false });
        }
        workoutSession.completedSets.set(target, sets);
    });

    workoutSession.setExercise(targets[0]);
}