<script>
    import SessionRestTimerModal from "../session/session-rest-timer-modal.svelte";
    import WorkoutCurrentExercise from "./workout-current-exercise.svelte";
    import WorkoutExercicesList from "./workout-exercices-list.svelte";
    import WorkoutSessionTimer from "./workout-session-timer.svelte";
</script>

<h1>
    Workout Session
</h1>
<WorkoutSessionTimer />

<WorkoutExercicesList />
<WorkoutCurrentExercise />

<SessionRestTimerModal />

