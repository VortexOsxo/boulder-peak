import type { Exercise } from '$lib/interfaces/exercise';
import { writable } from 'svelte/store';
import { getAuthorizationHeader } from './authentication';
import { PUBLIC_SERVER_URL } from '$env/static/public';

export const exercises = writable<Exercise[]>([]);

export async function fetchExercises() {
    const response = await fetch(`${PUBLIC_SERVER_URL}/exercise/`);
    exercises.set(await response.json());
}

export async function fetchExercise(id: string) {
    const response = await fetch(`${PUBLIC_SERVER_URL}/exercise/${id}`);
    return await response.json();
}

export async function fetchExerciseLogs(id: string) {
    const response = await fetch(`${PUBLIC_SERVER_URL}/exercise/${id}/logs`, {
        method: 'GET',
        headers: {
            Authorization: getAuthorizationHeader(),
            'Content-Type': 'application/json'
        }
    });
    return await response.json();
}
