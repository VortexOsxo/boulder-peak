import { get, writable } from "svelte/store";

export const workoutTimer = writable<number>(0);
let timerIntervalId: ReturnType<typeof setInterval>;

export function startTimer() {
    workoutTimer.set(0);
    timerIntervalId = setInterval(() => {
        workoutTimer.update((time) => time + 1);
    }, 1000);
}

export function stopTimer() {
    clearInterval(timerIntervalId);
    return get(workoutTimer);
}
