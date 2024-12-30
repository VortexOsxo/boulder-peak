<script lang="ts">
  import ExerciseHeader from "./exercise-header.svelte";
  import { workoutTargets } from "../stores/exercices";
  import ExerciseListHeader from "./exercise-list-header.svelte";
</script>

<ExerciseListHeader />

{#each $workoutTargets as exercise}
  <ExerciseHeader target={exercise} />
{/each}
