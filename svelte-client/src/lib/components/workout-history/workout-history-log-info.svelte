<script>
    // @ts-nocheck

    import { exercises } from "$lib/stores/exercices";

    let { workout } = $props();

    function formatDate(dateString) {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
        };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }
</script>

<div class="p-4 mb-4">
    <p>{formatDate(workout.date)}</p>

    <p>{workout.exercises.length} exercises:</p>
    {#each workout.exercises as exercise}
        <div class="ml-4">
            <p>{exercise.name}</p>
            {#each exercise.sets as set}
                <p class="ml-8">{set.reps} reps at {set.weight} lbs</p>
            {/each}
        </div>
    {/each}
</div>
