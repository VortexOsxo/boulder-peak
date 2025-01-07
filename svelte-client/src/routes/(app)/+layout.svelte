<script>
    import Navbar from "$lib/components/navbar/navbar.svelte";
    import { onMount } from 'svelte';
    import { initNavBar } from "$lib/stores/nav-bar-selected";

    let { children } = $props();

    onMount(initNavBar);

</script>

<Navbar/>

{@render children()}
