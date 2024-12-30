<script>
    import WorkoutExerciceListHeader from "./workout-exercice-list-header.svelte";
    import { workoutTargets } from "$lib/stores/exercices";
</script>

<div
    class="flex overflow-x-auto whitespace-nowrap"
>
    {#each $workoutTargets as target}
        <WorkoutExerciceListHeader {target} />
    {/each}
</div>
