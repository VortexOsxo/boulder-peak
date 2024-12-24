<script>
    import WorkoutExerciceListHeader from "./workout-exercice-list-header.svelte";
    import { exercises } from "$lib/stores/exercices";
</script>

<div
    class="flex overflow-x-auto whitespace-nowrap"
>
    {#each $exercises as exercise}
        <WorkoutExerciceListHeader {exercise} />
    {/each}
</div>
