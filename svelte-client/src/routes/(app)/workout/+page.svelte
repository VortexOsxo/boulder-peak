<script>
    import ExerciseList from "$lib/components/exercise-list.svelte";
    import { workoutState, logWorkout } from "$lib/stores/workout";
    import WorkoutSession from "$lib/components/workout-session/workout-session.svelte";
    import { workoutTargets } from "$lib/stores/exercices";
    import { get } from "svelte/store";
    import { goto } from "$app/navigation";
    import { startTimer } from "$lib/stores/workout-timer";

    function startWorkout() {
        workoutState.inWorkout = true;
        startTimer();

        let exercisesArray = get(workoutTargets);
        if (exercisesArray.length > 0)
            workoutState.currentExercise.set(exercisesArray[0]);
    }

    function stopWorkout() {
        workoutState.inWorkout = false;
        logWorkout();
        goto("history");
    }

</script>

{#if !workoutState.inWorkout}
    <ExerciseList />

    <button
        class="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-25 bg-accent text-black px-4 py-2 rounded"
        onclick={startWorkout}
    >
        Start Workout
    </button>
{:else}
    <WorkoutSession />
    <button
        class="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-25 bg-accent text-black px-4 py-2 rounded"
        onclick={stopWorkout}
    >
        Complete Workout
    </button>
{/if}
