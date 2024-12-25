<script>
    import WorkoutCurrentExercise from "./workout-current-exercise.svelte";
    import WorkoutExercicesList from "./workout-exercices-list.svelte";
    import WorkoutTimerWindow from "./workout-timer-window.svelte";

    let timerActive = false;
</script>

<h1>
    Workout Session
</h1>

<WorkoutExercicesList />
<WorkoutCurrentExercise />

{#if timerActive} 
    <WorkoutTimerWindow />
{/if}
