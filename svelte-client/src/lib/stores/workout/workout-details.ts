import type { Exercise, ExerciseTarget } from "$lib/interfaces/exercise";
import type { WorkoutSchema } from "$lib/interfaces/workout-schema";
import { getExerciseLastTarget, getExercises } from "$lib/services/exercises";
import { derived, get, writable } from "svelte/store";

function initializeDetails() {
    const name = writable<string>("Default Workout");
    const targets = writable<ExerciseTarget[]>([]);
    const canStartWorkout = derived(targets, ($targets) => $targets.length);

    function updateExercises(selectedExercises: Set<Exercise>) {
        let newTargets: ExerciseTarget[] = [];
        for (let exercise of selectedExercises) {
            newTargets.push({ exercise, ...getExerciseLastTarget(exercise.id) });
        }
        targets.set(newTargets);
    }

    function saveWorkoutSchema(workoutSchemaName: string) {
        const exercises = get(targets).map((target) => target.exercise.id);

        fetch('/api/workout-schemas', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: workoutSchemaName, exercises }),
        });
    }

    return { name, targets, canStartWorkout, updateExercises, saveWorkoutSchema }
}

export const workoutDetails = initializeDetails();

export function loadWorkoutSchema(schema: WorkoutSchema) {
    workoutDetails.name.set(schema.name);

    const exercisesMap = new Map<string, Exercise>();
    getExercises().forEach((exercise) => exercisesMap.set(exercise.id, exercise));
    const targets = schema.exercises.map((exercisesId) => exercisesMap.get(exercisesId)!);

    workoutDetails.updateExercises(new Set(targets));
}