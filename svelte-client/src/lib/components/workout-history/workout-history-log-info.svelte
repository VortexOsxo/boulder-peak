<script>
    // @ts-nocheck
    import { goto } from "$app/navigation";
    import { formatDateWithHour } from "$lib/utils/formats";
    import { oneRepMax } from "$lib/utils/orm";
    import { onMount } from "svelte";

    let { workout } = $props();
</script>

{#if workout}
    <div class="p-4 mb-4 text-main-text">
        <p>{formatDateWithHour(workout.date)}</p>
        <p>{workout.duration} seconds</p>
        <p>{workout.exercises.length} exercises:</p>

        {#each workout.exerformatDateWithHoutxercise}
            <div class="ml-4">
                <p>{idToName(exercise.id)}</p>
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
