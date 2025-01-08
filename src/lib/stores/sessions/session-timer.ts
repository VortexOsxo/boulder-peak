import { get, writable } from "svelte/store";

export function createSessionTimer() {
    let timerIntervalId: ReturnType<typeof setInterval>;
    let sessionTimer = writable<number>(0);

    function start() {
        sessionTimer.set(0);
        timerIntervalId = setInterval(() => {
            sessionTimer.update((time) => time + 1);
        }, 1000);
    }

    function stop() {
        clearInterval(timerIntervalId);
        return get(sessionTimer);
    }

    function reset() {
        stop();
        sessionTimer.set(0);
    }

    return { ...sessionTimer, start, stop, reset }
}
