<script>
    import { workoutSession } from "$lib/stores/workout/workout-session";
    import { formatTimerTime } from "$lib/utils/timer";

    let timer = workoutSession.timer
</script>

<p>{formatTimerTime($timer)}</p>