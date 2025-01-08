<script>
    import WorkoutExerciceListHeader from "./workout-exercice-list-header.svelte";
    import { workoutDetails } from "$lib/stores/workout/workout-details";

    let targets = workoutDetails.targets;
</script>

<div
    class="flex overflow-x-auto whitespace-nowrap"
>
    {#each $targets as target}
        <WorkoutExerciceListHeader {target} />
    {/each}
</div>
