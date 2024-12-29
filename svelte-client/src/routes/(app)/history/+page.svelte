<script>
    // @ts-nocheck

    import WorkoutHistoryLogHeader from "$lib/components/workout-history/workout-history-log-header.svelte";
    import WorkoutHistoryLogInfo from "$lib/components/workout-history/workout-history-log-info.svelte";
    import { fetchlogs, logs, selectedLog } from "$lib/stores/logs";
    import { get } from "svelte/store";
    fetchlogs();
</script>

{#if !$selectedLog}
    {#if !$logs.length}
        <p>No logs found</p>
    {/if}
    <h1>History</h1>
    {#each $logs as workout}
        <WorkoutHistoryLogHeader workout={workout} />
    {/each}
{:else}
    <WorkoutHistoryLogInfo workout={get(selectedLog)} />
{/if}
