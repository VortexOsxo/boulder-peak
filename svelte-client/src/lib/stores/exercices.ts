import type { Exercise, ExerciseTarget } from '$lib/interfaces/exercise';
import { get, writable } from 'svelte/store';
import { serverUrl } from '../../env';

export const exercises = writable<Exercise[]>([]);

export function fetchExerciseData() {
    fetch(`${serverUrl}/exercise`)
        .then(response => response.json()).then(exercises.set);
}

export const workoutTargets = writable<ExerciseTarget[]>([]);

export function addExercise(exercise: Exercise) {
    if (get(workoutTargets).find(target => target.exercise === exercise)) return;

    workoutTargets.update(exerciseList => [...exerciseList, { exercise, sets: 3, reps: 8, weight: 50 }]);
}

export function updateExercisesWithSelected(selectedExercises: Set<Exercise>) {

    workoutTargets.update(exercises =>
        exercises.filter((target) => selectedExercises.has(target.exercise))
    );

    selectedExercises.forEach(exercise => addExercise(exercise));
}

fetchExerciseData();