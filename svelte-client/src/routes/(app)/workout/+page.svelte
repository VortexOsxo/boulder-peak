<script>
    import { onMount } from "svelte";
    import { getAuthorizationHeader } from "$lib";
    import ExerciseList from "$lib/components/exercise-list.svelte";
    import { workoutState } from "$lib/stores/workout";

    let message = "";

    onMount(() =>
        fetch("http://127.0.0.1:5000/training/", {
            method: "GET",
            headers: { Authorization: getAuthorizationHeader() },
        }).then((response) => response.text().then((text) => (message = text))),
    );
</script>

{#if !workoutState.inWorkout}
    <ExerciseList />

    <button
        class="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-25 bg-accent text-black px-4 py-2 rounded"
        onclick={() => (workoutState.inWorkout = true)}
    >
        Start Workout
    </button>
{:else}
    <h2>Workout Session</h2>
{/if}
