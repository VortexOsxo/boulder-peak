<script>
    // @ts-nocheck
    import { goto } from "$app/navigation";
    import { formatDateWithHour } from "$lib/utils/formats";
    import { idToName } from "$lib/utils/id-to-name";
    import { oneRepMax } from "$lib/utils/orm";
    import { onMount } from "svelte";
    import ExerciseLog from "../exercises/exercise-log.svelte";

    let { workout } = $props();

    function getLog(exercise) {
        return {
            name: idToName(exercise.id),
            ...exercise,
        };
    }
</script>

{#if workout}
    <div class="p-4 mb-4 text-main-text">
        <p>{formatDateWithHour(workout.date)}</p>
        <p>{workout.duration} seconds</p>
        <p>{workout.exercises.length} exercises:</p>

        {#each workout.exercises as exercise}
            <div class="mb-4">
                <ExerciseLog log={getLog(exercise)} />
            </div>
        {/each}
    </div>
{/if}
