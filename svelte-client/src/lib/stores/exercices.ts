import type { Exercise } from '$lib/interfaces/exercise';
import { writable } from 'svelte/store';
import { serverUrl } from '../../env';
import { getAuthorizationHeader } from './authentication';

export const exercises = writable<Exercise[]>([]);

export function fetchExerciseData() {
    fetch(`${serverUrl}/exercise`)
        .then(response => response.json()).then(exercises.set);
}

export async function fetchExercise(id: string) {
    const response = await fetch(`${serverUrl}/exercise/${id}`);
    return await response.json();
}

export async function fetchExerciseLogs(id: string) {
    const response = await fetch(`${serverUrl}/exercise/${id}/logs`, {
        method: 'GET',
        headers: {
            Authorization: getAuthorizationHeader(),
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}

fetchExerciseData();