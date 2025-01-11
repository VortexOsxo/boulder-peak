import { formatTimerTime } from "$lib/utils/timer";
import { writable } from "svelte/store";

export function createTimer() {
    const timerDisplay = writable("00:00");
    const isVisible = writable(false);

    let timerValue = defaultTimerValue;
    let timerInterval: NodeJS.Timeout | undefined;

    function start() {
        isVisible.set(true);
        timerValue = defaultTimerValue;
        timerDisplay.set(formatTimerTime(timerValue));
        
        if (timerInterval) return;
        timerInterval = setInterval(onTick, 1000);
    }

    function stop() {
        clearInterval(timerInterval);
        timerInterval = undefined
    }

    function close() {
        stop();
        isVisible.set(false);
    }

    function add(value: number) {
        timerValue = Math.max(0, timerValue + value);
        if (timerValue <= 0) stop();
        if (timerValue > 0 && !timerInterval) timerInterval = setInterval(onTick, 1000);
        timerDisplay.set(formatTimerTime(timerValue));
    }

    function onTick() {
        add(-1);
    }

    return { ...timerDisplay, isVisible, start, add, close }
}

export const defaultTimerValue = 120;
export const restTimer = createTimer();