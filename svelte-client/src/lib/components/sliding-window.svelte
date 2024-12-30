<script>
    import { slide } from "svelte/transition";
    let { name, children, visible = false, onClose = () => {} } = $props();

    function close() {
        visible = false;
        onClose();
    }

</script>

{#if visible}
    <div class="fixed inset-0 bg-primary-background z-20 items-end" transition:slide>
        {@render children()}
    </div>
{/if}
