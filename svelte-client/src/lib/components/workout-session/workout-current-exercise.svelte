<script>
    import { workoutState } from "$lib/stores/workout";

    const { currentExercise } = workoutState;

    let reps = 0;
    let weight = 0;
</script>

<p class="text-title-text">{$currentExercise.name}</p>
{#each Array.from({ length: $currentExercise.sets }) as _, index}
    <div class="flex items-center mb-4">
        <p class="mr-4 text-title-text">Set {index + 1}</p>
        <label class="flex items-center">
            <input
                type="number"
                bind:value={weight}
                class="border rounded p-1 bg-secondary-background text-title-text w-16"
            />
            <span class="mr-2 text-title-text m-1"> lb </span>
        </label>
        <label class="flex items-center ml-4">
            <input
                type="number"
                bind:value={reps}
                class="border rounded p-1 bg-secondary-background text-title-text w-16"
            />
            <span class="mr-2 text-title-text m-1"> reps </span>
        </label>
    </div>
{/each}
