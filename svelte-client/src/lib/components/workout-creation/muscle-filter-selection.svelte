<script>
	import { muscleFilter } from "$lib/stores/workout/workout-creation";
    import { get } from "svelte/store";

	let visible = $state(false);

	let muscles = [
		"abs",
		"biceps",
		"calves",
		"chest",
		"forarms",
		"glutes",
		"lats",
		"lower_back",
		"quadriceps",
		"shoulders",
		"triceps",
	];

	let selectedFilter = $state(get(muscleFilter));

	function select() {
		muscleFilter.set(selectedFilter);
		visible = false;
	}

	function clear() {
		muscleFilter.set("");
		selectedFilter = "";
		visible = false;
	}

</script>

<button class="text-accent font-bold" onclick={() => (visible = true)}>
	Filter
</button>

{#if visible}
	<div
		class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
	>
		<div class="bg-secondary-background p-6 rounded-lg shadow-lg w-96">
			<h1 class="text-title-text font-bold">Select target muscle</h1>

			<div class="grid grid-cols-3">
				{#each muscles as muscle}
					<button
						class="{selectedFilter === muscle ? 'bg-accent' : 'bg-primary-background'} p-4 m-4 rounded-lg w-24 h-24 flex flex-col items-center justify-center"
						onclick={() => selectedFilter = muscle}
					>
						<img
							src={`/musclegroups/${muscle}.png`}
							alt={muscle}
							class="p-0 m-0 w-full h-full object-cover"
						/>
						<p class="text-main-text">{muscle}</p>
					</button>
				{/each}
			</div>
			<div class="flex justify-center gap-4">
				<button
					onclick={select}
					class="text-black bg-accent p-4 rounded"
				>
					Select
				</button>
				<button
					onclick={clear}
					class="text-title-text bg-primary-background p-4 rounded"
					>Clear</button
				>
			</div>
		</div>
	</div>
{/if}
