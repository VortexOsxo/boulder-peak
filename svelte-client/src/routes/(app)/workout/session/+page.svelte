<script>
    import { logWorkout } from "$lib/stores/workout/workout";
    import WorkoutSession from "$lib/components/workout-session/workout-session.svelte";
    import { goto } from "$app/navigation";
    import AccentButton from "$lib/components/ui/accent-button.svelte";

    function stopWorkout() {
        logWorkout();
        goto("/history");
    }
</script>

<WorkoutSession />

<AccentButton
    onclick={stopWorkout}
    tailwind="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-25"
>
    Complete Workout
</AccentButton>