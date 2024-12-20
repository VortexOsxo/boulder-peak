<script>
    import { slide } from "svelte/transition";
    
    export let visible = false;
</script>

{#if visible}
    <div class="overlay" transition:slide>
        <div class="window">
            <p>Window content</p>
        </div>
    </div>
{/if}

<style>
    .overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .window {
        background: white;
        width: 90%;
        max-width: 500px;
        padding: 2rem;
        border-radius: 10px;
    }
</style>
