<script>
    import { derived } from "svelte/store";
    import { workoutSession } from "$lib/stores/workout/workout-session";

    let { target } = $props();

    function selectExercise() {
        workoutSession.setExercise(target);
    }

    let colorClass = derived(
        workoutSession.currentExercise,
        ($currentExercise) => {
            if ($currentExercise.exercise.id === target.exercise.id) {
                return "bg-accent text-black";
            } else {
                return "bg-secondary-background text-main-text";
            }
        },
    )

</script>

<button
    class="text-xl {$colorClass} p-4 m-4 rounded-lg w-16 h-16 flex items-center justify-center"
    onclick={selectExercise}
>
    {target.exercise.name.slice(0, 2)}
</button>
