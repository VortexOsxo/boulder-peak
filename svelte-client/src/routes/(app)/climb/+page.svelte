<script>
    import { getRandomClimbingDrill } from "$lib/stores/climbing_drills";
    import { onMount } from "svelte";

    let drill = $state({ name: "Loading...", description: "Loading..." });

    onMount(async () => {
        drill = await getRandomClimbingDrill();
    });
</script>

<div class="bg-secondary-background p-4 rounded-lg">
    <p class="mb-4 text-title-text">Name: {drill.name}</p>
    <p class="text-main-text">Description: {drill.description}</p>
</div>
