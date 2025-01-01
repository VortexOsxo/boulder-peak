<script>
    // @ts-nocheck

    import WorkoutHistoryLogHeader from "$lib/components/workout-history/workout-history-log-header.svelte";
    import WorkoutHistoryLogInfo from "$lib/components/workout-history/workout-history-log-info.svelte";
    import { fetchlogs, logs, selectedLog } from "$lib/stores/logs";
    import { onMount } from "svelte";
    import { get } from "svelte/store";
    
    onMount(fetchlogs);
</script>

{#if !$selectedLog}
    {#if !$logs.length}
        <p>No logs found</p>
    {/if}
    <h1 class="text-main-text p-4">Past Workouts</h1>
    {#each $logs as workout}
        <WorkoutHistoryLogHeader workout={workout} />
    {/each}
{:else}
    <WorkoutHistoryLogInfo workout={get(selectedLog)} />
{/if}
