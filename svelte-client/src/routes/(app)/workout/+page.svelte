<script>
    import { goto } from "$app/navigation";
    import ExerciseList from "$lib/components/exercise-list.svelte";
    import AccentButton from "$lib/components/ui/accent-button.svelte";
    import SelectedWorkoutHeader from "$lib/components/workout-preparation/selected-workout-header.svelte";
    import { currentExercise } from "$lib/stores/workout/workout";
    import { workoutTargets } from "$lib/stores/workout/workout-schema";
    import { startTimer } from "$lib/stores/workout/workout-timer";
    import { derived, get } from "svelte/store";

    let color = derived(workoutTargets, ($workoutTargets) => {
        if ($workoutTargets.length) {
            return "bg-accent";
        }
        return "bg-secondary-background";
    });

    function startWorkout() {
        let exercisesArray = get(workoutTargets);
        if (!exercisesArray.length) return

        startTimer();
        currentExercise.set(exercisesArray[0]);
        goto("/workout/session");
    }
</script>

<SelectedWorkoutHeader />
<ExerciseList />

<AccentButton
    onclick={startWorkout}
    tailwind="{$color} fixed bottom-32 left-1/2 transform -translate-x-1/2 z-25"
>
    Start Workout
</AccentButton>
