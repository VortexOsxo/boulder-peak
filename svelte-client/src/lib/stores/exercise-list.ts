import { writable } from 'svelte/store';

export const exercises = writable([
    { name: "Dumbbell Curl", repetitions: 10, sets: 3, weight: 10 },
    { name: "Pull Up", repetitions: 10, sets: 3, weight: 0 }
]);