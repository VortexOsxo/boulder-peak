<script>
    import { workoutState, initializeSets, addSet } from "$lib/stores/workout/workout";
    import { Checkbox } from "flowbite-svelte";
    import { onDestroy } from "svelte";
    import { get } from "svelte/store";

    const { currentExercise } = workoutState;
    let sets = initializeSets(get(currentExercise));

    const unsubscribe = currentExercise.subscribe((value) => {
        sets = initializeSets(value);
    });

    onDestroy(() => {
        unsubscribe();
    });

    function handleAddSet() {
        addSet(get(currentExercise));
        sets = [...initializeSets(get(currentExercise))];
    }
</script>

<div class="flex flex-col items-center">
    <p class="text-title-text">{$currentExercise.exercise.name}</p>
    {#each sets as set, index}
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
            <Checkbox bind:checked={set.done} class="ml-4"></Checkbox>
        </div>
    {/each}

    <button
        class="bg-accent text-white px-4 py-2 rounded"
        onclick={handleAddSet}
    >
        Add Set
    </button>
</div>
