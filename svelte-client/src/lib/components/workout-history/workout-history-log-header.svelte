<script>
    // @ts-nocheck

    let { workoutLog } = $props();

    function formatDate(dateString) {
        const options = { year: "numeric", month: "long", day: "numeric", hour: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
    }
</script>

<div class="bg-secondary-background p-4 mb-4">
    <p>{formatDate(workoutLog.date)}</p>
    <p>{workoutLog.exercises.length} exercices</p>
</div>
