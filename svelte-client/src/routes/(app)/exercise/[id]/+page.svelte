<script>
    // @ts-nocheck

    import { page } from "$app/stores";
    import ExerciseLog from "$lib/components/exercises/exercise-log.svelte";
    import { fetchExercise, fetchExerciseLogs } from "$lib/stores/exercices";
    import { idToName } from "$lib/utils/id-to-name";
    import { onMount } from "svelte";

    let { id } = $page.params;

    let exercise = { name: "Loading...", primary: "Loading...", secondary: [] };
    let logs = [];

    onMount(() => {
        fetchExercise(id).then((ex) => (exercise = ex));
        fetchExerciseLogs(id).then((lo) => (logs = lo));
    });
</script>

<h1>{exercise.name}</h1>
<h1>Primary Muscle: {idToName(exercise.primary)}</h1>
<div class="flex flex-row">
    {#if exercise.secondary.length}
        Secondary Muscles: {exercise.secondary.map(idToName).join(" ")}
    {/if}
</div>

<h2>Logs</h2>

{#each logs as log}
    <ExerciseLog {log} />
{/each}
