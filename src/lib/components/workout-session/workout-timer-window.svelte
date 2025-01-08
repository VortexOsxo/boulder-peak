<script>
    import { formatTimerTime } from "$lib/utils/timer";
    import { writable } from "svelte/store";

    let { defaultTimerValue = 120 } = $props();

    const timerDisplay = writable("00:00");
    let timerValue = defaultTimerValue;

    setTimerValue();
    let timerInterval = setInterval(onTick, 1000);

    function setTimerValue() {
        timerDisplay.set(formatTimerTime(timerValue));
    }

    function onTick() {
        updateTimerValue(-1);
    }

    // @ts-ignore
    function updateTimerValue(value) {
        timerValue += value;
        if (timerValue <= 0) {
            timerValue = 0;
            clearInterval(timerInterval);
            timerInterval = 0;
        } else if (timerValue > 0 && !timerInterval) {
            timerInterval = setInterval(onTick, 1000);
        }
        setTimerValue();
    }

</script>

<div
    class="bg-secondary-background rounded-t-xl fixed bottom-0 left-0 w-full h-[30vh] z-35 flex items-start justify-center"
>
    <div class="flex items-center justify-center w-32 h-32 mt-4">
        <button class="text-4xl text-white" onclick={() => updateTimerValue(-15)}>-</button>
    </div>
    <div
        class="flex items-center justify-center w-32 h-32 rounded-full border-4 border-white mt-4"
    >
        <p class="text-4xl text-white">{$timerDisplay}</p>
    </div>
    <div class="flex items-center justify-center w-32 h-32 mt-4">
        <button class="text-4xl text-white" onclick={() => updateTimerValue(15)}>+</button>
    </div>
</div>
