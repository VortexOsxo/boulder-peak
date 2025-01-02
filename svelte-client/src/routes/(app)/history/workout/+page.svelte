<script>
    import WorkoutHistoryLogInfo from "$lib/components/workout-history/workout-history-log-info.svelte";

    import { selectedLog } from "$lib/stores/logs";
    import { get } from "svelte/store";

</script>

<WorkoutHistoryLogInfo workout={get(selectedLog)} />