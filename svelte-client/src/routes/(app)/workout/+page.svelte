<script>
    import { goto } from "$app/navigation";
    import ExerciseList from "$lib/components/exercise-list.svelte";
    import AccentButton from "$lib/components/ui/accent-button.svelte";
    import { workoutTargets } from "$lib/stores/exercices";
    import { workoutState } from "$lib/stores/workout/workout";
    import { startTimer } from "$lib/stores/workout/workout-timer";
    import { get } from "svelte/store";

    let visible = $state(false);

    function startWorkout() {
        startTimer();

        let exercisesArray = get(workoutTargets);
        if (exercisesArray.length > 0)
            workoutState.currentExercise.set(exercisesArray[0]);
        goto("/workout/session");
    }
</script>

<div
    class="p-4 rounded mb-4 bg-secondary-background flex justify-between items-center"
>
    <h1 class="text-xl font-bold text-title-text">Default Workout</h1>
    <button class="text-accent text-3xl" onclick={() => (visible = true)}>
        &#8230
    </button>
    {#if visible}
        <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
            <div
                class="bg-secondary-background p-6 rounded-lg shadow-lg w-96"
            >
                <h1 class="text-title-text font-bold">Select target muscle</h1>
            </div>
        </div>
    {/if}
</div>

<ExerciseList />

<AccentButton
    onclick={startWorkout}
    tailwind="fixed bottom-32 left-1/2 transform -translate-x-1/2 z-25"
>
    Start Workout
</AccentButton>
