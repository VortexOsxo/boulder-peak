<script lang="ts">
	import { workoutDetails } from "$lib/stores/workout/workout-details";
	import ExerciseHeader from "./exercise-header.svelte";
	import ExerciseListHeader from "./exercise-list-header.svelte";

	let targets = workoutDetails.targets;
</script>

<ExerciseListHeader />

{#each $targets as target}
	<ExerciseHeader {target} />
{/each}

{#if !$targets.length}
	<p class="text-center text-title-text">Select some exercises to start a workout</p>
{/if}