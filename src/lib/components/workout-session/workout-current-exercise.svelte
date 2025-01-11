<script lang="ts">
    import { Checkbox } from "flowbite-svelte";
    import AccentButton from "../ui/accent-button.svelte";
    import { workoutSession } from "$lib/stores/workout/workout-session";
    import { restTimer } from "$lib/stores/sessions/rest-timer";


    let currentExercise = workoutSession.currentExercise;
    let currentSets = workoutSession.currentSets;

    function setChanged(value: boolean) {
        if (!value) return;
        restTimer.start();
    }

</script>

<div class="flex flex-col items-center">
    <p class="text-title-text">{$currentExercise.exercise.name}</p>
    {#each $currentSets as set, index}
        <div class="flex items-center mb-4">
            <p class="mr-4 text-title-text">Set {index + 1}</p>
            <label class="flex items-center">
                <input
                    type="number"
                    bind:value={set.weight}
                    class="border rounded p-1 bg-secondary-background text-title-text w-16"
                />
                <span class="mr-2 text-title-text m-1"> lb </span>
            </label>
            <label class="flex items-center ml-4">
                <input
                    type="number"
                    bind:value={set.reps}
                    class="border rounded p-1 bg-secondary-background text-title-text w-16"
                />
                <span class="mr-2 text-title-text m-1"> reps </span>
            </label>
            <Checkbox bind:checked={set.done} on:change={() => setChanged(set.done)} class="ml-4"></Checkbox>
        </div>
    {/each}

    <AccentButton onclick={workoutSession.addSet}>
        AddSet
    </AccentButton>
</div>
