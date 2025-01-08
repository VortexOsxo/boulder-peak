<script>
    import WorkoutHistoryLogInfo from "$lib/components/workout-history/workout-history-log-info.svelte";

    let { data } = $props();
    let { workout } = data;

</script>

<WorkoutHistoryLogInfo workout={workout} />