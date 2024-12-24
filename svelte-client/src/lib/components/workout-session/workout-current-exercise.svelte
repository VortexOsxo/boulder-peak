<script>
    import { workoutState } from "$lib/stores/workout";

    const { currentExercise } = workoutState;
</script>
<p> Current Exercise </p>
<p>{$currentExercise.name}</p>