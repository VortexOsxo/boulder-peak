<script>
	import { goto } from "$app/navigation";

	export let target;

	
</script>

<div class="exercise-header p-4 rounded mb-4">
	<button
		onclick={() => {
			goto(`/exercise/${target.exercise.id}`);
		}}
	>
		<div class="left-align text-left">
			<h2 class="text-l font-bold text-title-text">
				{target.exercise.name}
			</h2>
			<p class="mt-2 text-main-text">
				{target.weight} lb - {target.reps} reps - {target.sets} sets
			</p>
		</div>
	</button>
</div>
