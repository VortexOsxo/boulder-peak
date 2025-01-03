<script>
    import { currentExercise } from "$lib/stores/workout/workout";
    import { derived } from "svelte/store";

    let { target } = $props();

    function selectExercise() {
        currentExercise.set(target);
    }

    let colorClass = derived(
        currentExercise,
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
