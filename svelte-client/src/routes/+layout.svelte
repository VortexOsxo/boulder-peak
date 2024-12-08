<script>
    import Navbar from "$lib/navbar.svelte";
    import '../app.css';
</script>

<Navbar/>

<main>
    <slot />
</main>

<style>
    main {
        padding: 20px;
    }
</style>
