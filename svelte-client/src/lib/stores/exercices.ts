import type { Exercise } from '$lib/interfaces/exercise';
import { get, writable } from 'svelte/store';

export const exercises = writable<Exercise[]>([
    { name: "Dumbbell Curl", reps: 10, sets: 3, weight: 10 },
    { name: "Pull Up", reps: 10, sets: 3, weight: 0 }
]);

export function addExerciseByName(exerciseName: string) {
    if (get(exercises).find(exercise => exercise.name === exerciseName)) return; 
    const exercise = { name: exerciseName, reps: 10, sets: 3, weight: 50 };
    exercises.update(exerciseList => [...exerciseList, exercise]);
}

export function updateExercisesWithSelected(selectedExercises: Set<string>) {
    exercises.update(exercises => exercises.filter(exercise => selectedExercises.has(exercise.name)));

    selectedExercises.forEach(exerciseName => addExerciseByName(exerciseName));
}