<script>
    let { children, onclick, tailwind = "" } = $props();
</script>

<button
    onclick={onclick}
    class="{tailwind} bg-accent text-black px-4 py-2 rounded">
        {@render children()}
    </button
>
