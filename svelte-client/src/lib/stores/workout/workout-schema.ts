import type { Exercise, ExerciseTarget } from "$lib/interfaces/exercise";
import { get, writable } from "svelte/store";
import { getAuthorizationHeader } from "../authentication";
import { serverUrl } from "../../../env";
import type { WorkoutSchema } from "$lib/interfaces/workout-schema";
import { exercises } from "../exercices";

export const workoutTargets = writable<ExerciseTarget[]>([]);

export function addExercise(exercise: Exercise) {
    if (get(workoutTargets).find(target => target.exercise === exercise)) return;

    workoutTargets.update(exerciseList => [...exerciseList, { exercise, sets: 3, reps: 8, weight: 50 }]);
}

export function updateExercises(selectedExercises: Set<Exercise>) {

    workoutTargets.update(exercises =>
        exercises.filter((target) => selectedExercises.has(target.exercise))
    );

    selectedExercises.forEach(exercise => addExercise(exercise));
}

export function saveWorkoutSchema(name: string) {
    const exercises = get(workoutTargets).map((target) => target.exercise.id);

    fetch(`${serverUrl}/workout-schema/`, {
        method: "POST",
        headers: { Authorization: getAuthorizationHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, exercises }),
    });
}

export const workoutSchemas = writable<WorkoutSchema[]>([]);

export function fetchWorkoutSchema() {
    fetch(`${serverUrl}/workout-schema/`, {
        method: "GET",
        headers: { Authorization: getAuthorizationHeader() },
    }).then((response) => response.json()).then(workoutSchemas.set);
}

export function loadWorkoutSchema(schema: WorkoutSchema) {
    const exercisesMap = new Map();
    get(exercises).forEach((exercise) => exercisesMap.set(exercise.id, exercise));

    const targets: ExerciseTarget[] = schema.exercises
        .map((exercisesId) => exercisesMap.get(exercisesId))
        .map((exercise) => { return { exercise, sets: 3, reps: 8, weight: 50 }});
    
    workoutTargets.set(targets);
}