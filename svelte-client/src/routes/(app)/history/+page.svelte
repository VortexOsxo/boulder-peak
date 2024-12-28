<script>
    // @ts-nocheck

    import WorkoutHistoryLogHeader from "$lib/components/workout-history/workout-history-log-header.svelte";
    import { fetchlogs, logs } from "$lib/stores/logs";

    fetchlogs();
</script>

<h1>History</h1>
{#each $logs as workout}
    <WorkoutHistoryLogHeader workoutLog={workout} />
{/each}
