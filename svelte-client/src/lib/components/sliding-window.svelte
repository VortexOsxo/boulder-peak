<script>
    import { slide } from "svelte/transition";
    let { name, children, visible = false, onClose = () => {} } = $props();

    function close() {
        visible = false;
        onClose();
    }

</script>

{#if visible}
    <div class="fixed inset-0 bg-secondary-background z-20 items-end" transition:slide>
        <button class="absolute top-4 right-4 text-2xl" onclick={close}
            >-</button
        >
        <h2 class="text-2xl font-bold m-4">{name}</h2>
        {@render children()}
    </div>
{/if}
