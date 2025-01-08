<script>
    // @ts-nocheck

    import { page } from "$app/stores";
    import ExerciseLog from "$lib/components/exercises/exercise-log.svelte";
    import AccentButton from "$lib/components/ui/accent-button.svelte";
    import { idToName } from "$lib/utils/id-to-name";

    let state = $state(0);
    let { data } = $props();
    const { exercise, logs } = data;

    function getButtonColor(button) {
        return button === state
            ? "bg-accent text-black"
            : "bg-secondary-background text-main-text";
    }
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
        class="{getButtonColor(
            0,
        )} bg-accent text-black px-4 py-2 rounded flex-1"
        onclick={() => (state = 0)}
    >
        History
    </button>
    <button
        class="{getButtonColor(1)} px-4 py-2 rounded flex-1"
        onclick={() => (state = 1)}
    >
        Progression
    </button>
</div>
{#if state}
    <div
        class="p-4 rounded-b-lg mb-4 bg-secondary-background flex flex-col text-main-text"
    >
        <h1>Progression</h1>
        <p>Coming soon...</p>
    </div>
{:else}
    {#each logs as log}
        <div class="mb-4">
            <ExerciseLog {log} />
        </div>
    {/each}
{/if}
