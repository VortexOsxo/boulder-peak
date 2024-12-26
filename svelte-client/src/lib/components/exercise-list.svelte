<script lang="ts">
  import ExerciseHeader from "./exercise-header.svelte";
  import { exercises } from "../stores/exercices";
  import ExerciseListHeader from "./exercise-list-header.svelte";
</script>

<ExerciseListHeader />

{#each $exercises as exercise}
  <ExerciseHeader {exercise} />
{/each}
