<script>
    import { get } from "svelte/store";
    import { Checkbox } from "flowbite-svelte";
    import {
        exerciseData,
        workoutTargets as workoutTargets,
        updateExercisesWithSelected,
    } from "$lib/stores/exercices";
    import MuscleFilterSelection from "./muscle-filter-selection.svelte";
    import {
        muscleFilter,
        searchFilter,
    } from "$lib/stores/workout/workout-creation";

    let { closeCallback } = $props();

    let selectedExercises = new Set();

    selectedExercises.clear();
    get(workoutTargets).forEach((target) =>
        selectedExercises.add(target.exercise),
    );

    // @ts-ignore
    function toggleSelection(exercise) {
        selectedExercises.has(exercise)
            ? selectedExercises.delete(exercise)
            : selectedExercises.add(exercise);
    }

    let filteredExerciseData = $derived(
        $exerciseData.filter((exercise) =>
            exercise.name.toLowerCase().includes($searchFilter.toLowerCase()) &&
            (!$muscleFilter || $muscleFilter === exercise.primary)
        ),
    );

</script>

<div class="overflow-y-auto h-full no-scrollbar">
    <h2 class="text-2xl font-bold m-4 text-title-text">Select Exercises</h2>

    <div class="p-4 flex">
        <input
            type="text"
            bind:value={$searchFilter}
            class="bg-primary-backgroud rounded-lg m-2"
            placeholder="Search"
        />

        <MuscleFilterSelection />
    </div>

    {#each filteredExerciseData as exercise, index}
        <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-main-text m-4">
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
    class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-25 bg-accent text-black px-4 py-2 rounded"
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
