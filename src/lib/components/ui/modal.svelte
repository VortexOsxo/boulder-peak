<script>
    let { children, visible } = $props();
</script>

{#if visible}
    <div
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
    >
        <div
            class="bg-secondary-background p-6 rounded-lg shadow-lg w-96"
        >
            {@render children()}
        </div>
    </div>
{/if}
