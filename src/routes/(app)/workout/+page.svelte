<script>
    import { goto } from "$app/navigation";
    import ExerciseList from "$lib/components/exercise-list.svelte";
    import AccentButton from "$lib/components/ui/accent-button.svelte";
    import SelectedWorkoutHeader from "$lib/components/workout-preparation/selected-workout-header.svelte";
    import { get } from "svelte/store";
    import { workoutDetails } from "$lib/stores/workout/workout-details";
    import { startWorkoutSession } from "$lib/stores/workout/workout-session";

    let canStart = workoutDetails.canStartWorkout;

    function startWorkout() {
        if (!get(canStart)) return

        startWorkoutSession();
        goto("/workout/session");
    }
</script>

<SelectedWorkoutHeader />
<ExerciseList />

<AccentButton
    onclick={startWorkout}
    tailwind="{$canStart ? "bg-accent" :"bg-secondary-background" } fixed bottom-32 left-1/2 transform -translate-x-1/2 z-25"
>
    Start Workout
</AccentButton>
