import type { Exercise, ExerciseTarget } from "$lib/interfaces/exercise";
import { get, writable } from "svelte/store";
import type { WorkoutSchema } from "$lib/interfaces/workout-schema";
import { getExerciseLastTarget, getExercises } from "$lib/services/exercises";

export const workoutName = writable<string>("Default Workout");
export const workoutTargets = writable<ExerciseTarget[]>([]);

export function addExercise(exercise: Exercise) {
    if (get(workoutTargets).find(target => target.exercise === exercise)) return;
    workoutTargets.update(exerciseList => [...exerciseList, { exercise, ...getExerciseLastTarget(exercise.id) }]);
}

export function updateExercises(selectedExercises: Set<Exercise>) {
    workoutTargets.update(exercises =>
        exercises.filter((target) => selectedExercises.has(target.exercise))
    );

    selectedExercises.forEach(exercise => addExercise(exercise));
}


export const workoutSchemas = writable<WorkoutSchema[]>([]);

export async function loadWorkoutSchema(schema: WorkoutSchema) {
    workoutName.set(schema.name);

    const exercisesMap = new Map();
    getExercises().forEach((exercise) => exercisesMap.set(exercise.id, exercise));

    const targets: ExerciseTarget[] = schema.exercises
        .map((exercisesId) => exercisesMap.get(exercisesId))
        .map((exercise) => { return { exercise, ...getExerciseLastTarget(exercise.id) } });

    workoutTargets.set(targets);
}

export function saveWorkoutSchema(name: string) {
    const exercises = get(workoutTargets).map((target) => target.exercise.id);

    fetch('/api/workout-schemas', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, exercises }),
    });
}
