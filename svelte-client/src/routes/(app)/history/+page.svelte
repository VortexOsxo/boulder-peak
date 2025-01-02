<script>
    // @ts-nocheck

    import WorkoutHistoryLogHeader from "$lib/components/workout-history/workout-history-log-header.svelte";
    import WorkoutHistoryLogInfo from "$lib/components/workout-history/workout-history-log-info.svelte";
    import { fetchlogs, logs, selectedLog } from "$lib/stores/logs";
    import { getTotalVolume, getTotalWorkouts } from "$lib/stores/stats";
    import { onMount } from "svelte";
    import { get } from "svelte/store";

    let totalVolume = $state(0);
    let totalWorkouts = $state(0);

    onMount(() => {
        fetchlogs();
        getTotalVolume().then((vol) => (totalVolume = vol));
        getTotalWorkouts().then((workouts) => (totalWorkouts = workouts));
    });

</script>

<div class="flex flex-col p-4 justify-center text-title-text bg-secondary-background rounded-b-lg">
    <h1> Volume: {totalVolume} lb</h1>
    <h1> Workouts: {totalWorkouts} </h1>
</div>

{#if !$logs.length}
    <p>No logs found</p>
{:else}
    <h1 class="text-main-text p-4">Past Workouts</h1>
    {#each $logs as workout}
        <WorkoutHistoryLogHeader {workout} />
    {/each}
{/if}
