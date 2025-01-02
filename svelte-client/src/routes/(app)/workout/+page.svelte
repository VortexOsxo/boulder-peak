<script>
    import { goto } from "$app/navigation";
    import ExerciseList from "$lib/components/exercise-list.svelte";
    import AccentButton from "$lib/components/ui/accent-button.svelte";
    import SelectedWorkoutHeader from "$lib/components/workout-preparation/selected-workout-header.svelte";
    import { workoutState } from "$lib/stores/workout/workout";
    import { workoutTargets } from "$lib/stores/workout/workout-schema";
    import { startTimer } from "$lib/stores/workout/workout-timer";
    import { get } from "svelte/store";

    function startWorkout() {
        startTimer();

        let exercisesArray = get(workoutTargets);
        if (exercisesArray.length > 0)
            workoutState.currentExercise.set(exercisesArray[0]);
        goto("/workout/session");
    }
</script>

<SelectedWorkoutHeader />
<ExerciseList />

<AccentButton
    onclick={startWorkout}
    tailwind="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-25"
>
    Start Workout
</AccentButton>
