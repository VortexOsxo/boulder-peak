<script>
    import { workoutTargets } from "$lib/stores/workout/workout-schema";
    import WorkoutExerciceListHeader from "./workout-exercice-list-header.svelte";
</script>

<div
    class="flex overflow-x-auto whitespace-nowrap"
>
    {#each $workoutTargets as target}
        <WorkoutExerciceListHeader {target} />
    {/each}
</div>
