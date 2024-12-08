<script lang="ts">
    import { activePage } from '../states/active-page.svelte';

    let { name, path = name } = $props();
    let isActive = $derived(activePage.name === name);
</script>

<a
    href={path}
    onclick={() => activePage.name = name }
    class={isActive ? "nav-button-selected" : "nav-button"}
>
    <img src="/navbar/{isActive ? name + "-selected" : name}.png" alt={name} class="nav-button-icon" />
    {name}
</a>

<style>
    .nav-button {
        color: var(--text-color);

        display: flex;
        justify-content: center;
        align-items: center;
        height: 80%;
        width: 20%;
    }

    .nav-button-selected {
        color: var(--accent-color);

        display: flex;
        justify-content: center;
        align-items: center;
        height: 80%;
        width: 20%;
    }

    .nav-button-icon {
        width: 24px;
        height: 24px;
        margin: 4px;
    }

    a {
        text-decoration: none;
        color: inherit;
        font-family: "Helvetica", cursive;

        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>
