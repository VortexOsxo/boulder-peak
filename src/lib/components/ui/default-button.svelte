<script>
    let { children, onclick, tailwind = "" } = $props();
</script>

<button
    onclick={onclick}
    class="{tailwind} text-title-text bg-primary-background px-4 py-2 rounded">
        {@render children()}
    </button
>