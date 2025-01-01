<script>
	import { derived } from "svelte/store";
	import AddExerciseWindow from "./sliding-window.svelte";
	import ExerciseSelecter from "./workout-preparation/exercise-selecter.svelte";
	import { workoutTargets } from "$lib/stores/workout/workout-schema";

	const exerciseCount = derived(
		workoutTargets,
		($workoutExercises) => $workoutExercises.length,
	);
	let showWindow = false;

	function toggleWindow() {
		showWindow = !showWindow;
	}
</script>

<div
	class="exercise-list-header p-4 rounded mb-4 bg-secondary-background flex justify-between items-center"
>
	<h1 class="text-xl font-bold text-title-text">
		{$exerciseCount} Exercises
	</h1>
	<button class="text-accent text-3xl" onclick={toggleWindow}>+</button>
</div>

<AddExerciseWindow visible={showWindow}>
	<ExerciseSelecter closeCallback={() => (showWindow = false)} />
</AddExerciseWindow>
