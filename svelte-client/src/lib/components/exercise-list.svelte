<script lang="ts">
	import { workoutTargets } from "$lib/stores/workout/workout-schema";
	import ExerciseHeader from "./exercise-header.svelte";
	import ExerciseListHeader from "./exercise-list-header.svelte";
</script>

<ExerciseListHeader />

{#each $workoutTargets as exercise}
	<ExerciseHeader target={exercise} />
{/each}

{#if !$workoutTargets.length}
	<p class="text-center text-title-text">Select some exercises to start a workout</p>
{/if}