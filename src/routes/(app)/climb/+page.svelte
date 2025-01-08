<script>
    import AccentButton from "$lib/components/ui/accent-button.svelte";

    function startClimbing() {}
</script>

<div
    class="p-4 rounded mb-4 bg-secondary-background flex justify-between items-center"
>
    <h1 class="text-xl font-bold text-title-text">Climbing</h1>
</div>

<AccentButton
    onclick={startClimbing}
    tailwind="bg-accent fixed bottom-32 left-1/2 transform -translate-x-1/2 z-25"
>
    Start Climbing
</AccentButton>
