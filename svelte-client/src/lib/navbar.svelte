<script lang="ts">
    import NavbarButton from "./navbar-button.svelte";
</script>

<nav>
    <NavbarButton name="home" />
    <NavbarButton name="climb" />
    <NavbarButton name="workout" />
    <NavbarButton name="history" />
</nav>

<style>
    nav {
        background-color: var(--secondary-background-color);
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 10%;

        display: flex;
        justify-content: space-evenly;
        align-items: center;

        z-index: 10;
    }
</style>
