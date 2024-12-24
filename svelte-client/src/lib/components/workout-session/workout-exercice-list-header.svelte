<script>
    import { workoutState } from "$lib/stores/workout";

    let { exercise } = $props();

    function selectExercise() {
        workoutState.currentExercise.set(exercise);
    }

</script>

<button
    class="text-xl text-title-text bg-accent p-4 m-4 rounded-lg w-16 h-16 flex items-center justify-center"
    onclick={selectExercise}
>
    {exercise.name.slice(0, 2)}
</button>
