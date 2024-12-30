import type { Exercise, ExerciseData } from '$lib/interfaces/exercise';
import { get, writable } from 'svelte/store';
import { serverUrl } from '../../env';

export const exerciseData = writable<ExerciseData[]>([]);

export function fetchExerciseData() {
    fetch(`${serverUrl}/exercise`)
        .then(response => response.json()).then(exerciseData.set);
}

export const exercises = writable<Exercise[]>([]);

export function addExerciseByName(exerciseName: string) {
    if (get(exercises).find(exercise => exercise.name === exerciseName)) return;
    const exercise = { name: exerciseName, reps: 10, sets: 3, weight: 50 };
    exercises.update(exerciseList => [...exerciseList, exercise]);
}

export function updateExercisesWithSelected(selectedExercises: Set<string>) {
    exercises.update(exercises => exercises.filter(exercise => selectedExercises.has(exercise.name)));

    selectedExercises.forEach(exerciseName => addExerciseByName(exerciseName));
}

fetchExerciseData();