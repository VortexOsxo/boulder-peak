<script>
    import WorkoutCurrentExercise from "./workout-current-exercise.svelte";
    import WorkoutExercicesList from "./workout-exercices-list.svelte";
    import WorkoutSessionTimer from "./workout-session-timer.svelte";
    import WorkoutTimerWindow from "./workout-timer-window.svelte";

    let timerActive = false;
</script>

<h1>
    Workout Session
</h1>
<WorkoutSessionTimer />

<WorkoutExercicesList />
<WorkoutCurrentExercise />

{#if timerActive} 
    <WorkoutTimerWindow />
{/if}
