<script>
    // @ts-nocheck

    import WorkoutHistoryLogHeader from "$lib/components/workout-history/workout-history-log-header.svelte";
    import WorkoutHistoryLogInfo from "$lib/components/workout-history/workout-history-log-info.svelte";
    import { onMount } from "svelte";
    import { get } from "svelte/store";

    let { data } = $props();
    const { workouts, totalVolume, totalWorkouts } = data;

</script>

<div class="flex flex-col p-4 justify-center text-title-text bg-secondary-background rounded-b-lg">
    <h1> Volume: {totalVolume} lb</h1>
    <h1> Workouts: {totalWorkouts} </h1>
</div>

{#if !workouts.length}
    <p>No logs found</p>
{:else}
    <h1 class="text-main-text p-4">Past Workouts</h1>
    {#each workouts as workout}
        <WorkoutHistoryLogHeader {workout} />
    {/each}
{/if}
