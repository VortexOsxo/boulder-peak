<script>
    let { log } = $props();
    import { formatDateWithDay } from "$lib/utils/formats";
    import { oneRepMax } from "$lib/utils/orm";
</script>

<div
    class="p-4 rounded-lg bg-secondary-background flex flex-col text-main-text"
>
    {#if log.name}
        <h1 class="text-title-text">{log.name}</h1>
    {/if}
    {#if log.date}
        <h3>{formatDateWithDay(log.date)}</h3>
    {/if}
    <div class="flex flex-col">
        {#each log.sets as set}
            <p class="ml-4">{set.reps} reps x {set.weight} lb</p>
        {/each}
    </div>

    {#if log.sets}
        <h3>
            Estimated 1 rep max: {oneRepMax(
                log.sets[0].weight,
                log.sets[0].reps,
            ).toFixed(1)} lb
        </h3>
    {/if}
</div>
