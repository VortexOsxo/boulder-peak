import type { Exercise } from '$lib/interfaces/exercise';
import { writable } from 'svelte/store';
import { serverUrl } from '../../env';

export const exercises = writable<Exercise[]>([]);

export function fetchExerciseData() {
    fetch(`${serverUrl}/exercise`)
        .then(response => response.json()).then(exercises.set);
}

fetchExerciseData();