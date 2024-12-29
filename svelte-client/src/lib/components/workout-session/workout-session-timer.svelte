<script>
    import { workoutTimer } from "$lib/stores/workout-timer";
    import { formatTimerTime } from "$lib/utils/timer";
</script>

<p>{formatTimerTime($workoutTimer)}</p>