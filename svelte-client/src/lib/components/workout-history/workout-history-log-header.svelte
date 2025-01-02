<script>
    // @ts-nocheck
    import { goto } from "$app/navigation";
    import { selectedLog } from "$lib/stores/logs";

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

    function selectLog() {
        selectedLog.set(workout);
        goto('history/workout');
    }

</script>

<div class="bg-secondary-background p-4 mb-4">
    <button onclick={selectLog}>
        <p>{formatDate(workout.date)}</p>
        <p>{workout.duration} seconds</p>
        <p>{workout.exercises.length} exercices</p>
    </button>
</div>
