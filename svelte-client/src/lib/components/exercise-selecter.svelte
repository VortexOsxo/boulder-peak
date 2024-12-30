<script>
    import { get } from "svelte/store";
    import { Checkbox } from "flowbite-svelte";
    import {
        exerciseData,
        workoutTargets as workoutTargets,
        updateExercisesWithSelected,
    } from "$lib/stores/exercices";

    let selectedExercises = new Set();

    let { closeCallback } = $props();

    selectedExercises.clear();
    get(workoutTargets).forEach((target) => selectedExercises.add(target.exercise));

    // @ts-ignore
    function toggleSelection(exercise) {
        selectedExercises.has(exercise)
            ? selectedExercises.delete(exercise)
            : selectedExercises.add(exercise);
    }
</script>

<div class="overflow-y-auto h-full no-scrollbar">
    {#each $exerciseData as exercise, index}
        <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-title-text m-4">
                {exercise.name}
            </h3>
            <Checkbox
                class="m-4"
                checked={selectedExercises.has(exercise)}
                on:change={() => toggleSelection(exercise)}
            />
        </div>
        {#if index < $exerciseData.length - 1}
            <hr class="border-t border-gray-300" />
        {/if}
    {/each}
    <div class="h-16"></div>
</div>

<button
    class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-25 bg-accent text-white px-4 py-2 rounded"
    onclick={() => {
        updateExercisesWithSelected(selectedExercises);
        closeCallback();
    }}
>
    Add exercises
</button>

<style>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>
