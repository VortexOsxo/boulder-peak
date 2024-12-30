<script>
    import { get } from "svelte/store";
    import { Checkbox } from "flowbite-svelte";
    import { exercises, updateExercisesWithSelected } from "$lib/stores/exercices";

    let selectedExercises = new Set();

    let { closeCallback } = $props();

    const exercises_name = [
        "Dumbbell Curl",
        "Pull Up",
        "Bench Press",
        "Squat",
        "Leg press",
        "Dips",
        "Lats pulldown",
        "Dumbell pec fly",
        "Tricep extension",
        "Leg curl",
        "Leg extension",
        "Shoulder press",
        "Deadlift",
        "Calf raise",
        "Barbell curl",
        "Tricep pushdown",
        "Bent over row",
        "Seated row",
        "Incline bench press",
        "Decline bench press",
        "Chest press",
        "Shoulder fly",
        "Front raise",
        "Lateral raise",
        "Reverse fly",
        "Shrug",
        "Crunch",
        "Leg raise",
        "Russian twist",
    ];

    selectedExercises.clear();
    get(exercises).forEach((exercise) => selectedExercises.add(exercise.name));

    // @ts-ignore
    function toggleSelection(exercise) {
        selectedExercises.has(exercise)
            ? selectedExercises.delete(exercise)
            : selectedExercises.add(exercise);
    }
</script>

<div class="overflow-y-auto h-full no-scrollbar">
    {#each exercises_name as exercise, index}
        <div class="flex items-center justify-between">
            <h3 class="text-xl font-semibold text-title-text m-4">
                {exercise}
            </h3>
            <Checkbox
                class="m-4"
                checked={selectedExercises.has(exercise)}
                on:change={() => toggleSelection(exercise)}
            />
        </div>
        {#if index < exercises_name.length - 1}
            <hr class="border-t border-gray-300" />
        {/if}
    {/each}
    <div class="h-16"></div>
</div>

<button
    class="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-25 bg-accent text-white px-4 py-2 rounded"
    onclick="{() => {
        updateExercisesWithSelected(selectedExercises);
        closeCallback();
    }}"
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
