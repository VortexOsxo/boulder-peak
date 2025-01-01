<script>
    // @ts-nocheck
    import { goto } from "$app/navigation";
    import { oneRepMax } from "$lib/utils/orm";
    import { onMount } from "svelte";

    let { workout } = $props();

    function formatDate(dateString) {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
        };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }
</script>

{#if workout}
    <div class="p-4 mb-4 text-main-text">
        <p>{formatDate(workout.date)}</p>
        <p>{workout.duration} seconds</p>
        <p>{workout.exercises.length} exercises:</p>

        {#each workout.exercises as exercise}
            <div class="ml-4">
                <p>{exercise.name}</p>
                {#if exercise.sets.length}
                    <p>
                        1 rep max: {oneRepMax(
                            exercise.sets[0].weight,
                            exercise.sets[0].reps,
                        ).toFixed(1)} lbs
                    </p>
                {/if}
                {#each exercise.sets as set}
                    <p class="ml-8">{set.reps} reps at {set.weight} lbs</p>
                {/each}
            </div>
        {/each}
    </div>
{/if}
