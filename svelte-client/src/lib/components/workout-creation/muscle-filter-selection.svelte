<script>
	import { muscleFilter } from "$lib/stores/workout/workout-creation";
	import { get } from "svelte/store";
	import AccentButton from "../ui/accent-button.svelte";
	import DefaultButton from "../ui/default-button.svelte";
	import Modal from "../ui/modal.svelte";

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

<Modal {visible}>
	<h1 class="text-title-text font-bold">Select target muscle</h1>
	<div class="grid grid-cols-3">
		{#each muscles as muscle}
			<button
				class="{selectedFilter === muscle
					? 'bg-accent'
					: 'bg-primary-background'} p-4 m-4 rounded-lg w-24 h-24 flex flex-col items-center justify-center"
				onclick={() => (selectedFilter = muscle)}
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
		<AccentButton onclick={select}>Select</AccentButton>
		<DefaultButton onclick={clear}>Clear</DefaultButton>
	</div>
</Modal>
