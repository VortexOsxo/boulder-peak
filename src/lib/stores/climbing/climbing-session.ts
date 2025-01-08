import { writable } from "svelte/store";
import { createSessionTimer } from "../sessions/session-timer";

function initializeWorkoutSession() {
    const timer = createSessionTimer();
    
    const completedExos = writable([]);

    async function logClimbing() {
        const date = new Date();

        const duration = timer.stop();

        await fetch(`/api/climbings/`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ date, duration, }),
        });
    }

    return { timer, completedExos }
}

export const climbingSession = initializeWorkoutSession();

export function startWorkoutSession() {
    climbingSession.timer.reset();
    climbingSession.completedExos.set([]);

}