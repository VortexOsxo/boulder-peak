<script>
    import Navbar from "$lib/navbar.svelte";
    let { children } = $props();
</script>

<Navbar/>

{@render children()}
