<script>
    let { children, visible, close = () => {} } = $props();
</script>

{#if visible}
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <div
        class="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
        onclick={() => close()}
    >
        <div
            class="bg-secondary-background p-6 rounded-lg shadow-lg w-96"
            onclick={(event) => event.stopPropagation()}
        >
            {@render children()}
        </div>
    </div>
{/if}
