<script>
  import { exercises } from "../stores/exercise-list";
  import { derived } from "svelte/store";
    import AddExerciseWindow from "./add-exercise-window.svelte";

  const exerciseCount = derived(exercises, ($exercises) => $exercises.length);
  let showWindow = false;

  function toggleWindow() {
    showWindow = !showWindow;
  }
</script>

<div
  class="exercise-list-header p-4 rounded mb-4 bg-secondary-background flex justify-between items-center"
>
  <h1 class="text-xl font-bold text-title-text">{$exerciseCount} Exercises</h1>
  <button class="text-accent text-3xl" on:click={toggleWindow}>+</button>
</div>

<AddExerciseWindow visible={showWindow}/>
