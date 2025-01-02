<script>
    // @ts-nocheck

    import { page } from "$app/stores";
    import ExerciseLog from "$lib/components/exercises/exercise-log.svelte";
    import AccentButton from "$lib/components/ui/accent-button.svelte";
    import { fetchExercise, fetchExerciseLogs } from "$lib/stores/exercices";
    import { idToName } from "$lib/utils/id-to-name";
    import { onMount } from "svelte";

    let { id } = $page.params;

    let exercise = $state({
        name: "Loading...",
        primary: "Loading...",
        secondary: [],
    });
    let logs = $state([]);
    let state = $state(0);

    function getButtonColor(button) {
        return button === state
            ? "bg-accent text-black"
            : "bg-secondary-background text-main-text";
    }

    onMount(() => {
        fetchExercise(id).then((ex) => (exercise = ex));
        fetchExerciseLogs(id).then((lo) => (logs = lo));
    });
</script>

<div
    class="p-4 rounded-b-lg bg-secondary-background flex flex-col text-main-text"
>
    <h1>{exercise.name}</h1>
    <h1>Primary Muscle: {idToName(exercise.primary)}</h1>
    <div class="flex flex-row">
        {#if exercise.secondary.length}
            Secondary Muscles: {exercise.secondary.map(idToName).join(" ")}
        {/if}
    </div>
</div>

<div class="flex p-4 justify-center space-x-4">
    <button
        class="{getButtonColor(0)} px-4 py-2 rounded flex-1"
        onclick={() => (state = 0)}
    >
        Progression
    </button>
    <button
        class="{getButtonColor(1)} bg-accent text-black px-4 py-2 rounded flex-1"
        onclick={() => (state = 1)}
    >
        History
    </button>
</div>
{#if state}
    {#each logs as log}
        <ExerciseLog {log} />
    {/each}
{:else}
    <div
        class="p-4 rounded-b-lg mb-4 bg-secondary-background flex flex-col text-main-text"
    >
        <h1>Progression</h1>
        <p>Coming soon...</p>
    </div>
{/if}
