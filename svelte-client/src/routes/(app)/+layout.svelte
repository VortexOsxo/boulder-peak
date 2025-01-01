<script>
    import Navbar from "$lib/components/navbar/navbar.svelte";
    import { onMount } from 'svelte';
    import { checkAuth } from '$lib';
    import { initNavBar } from "$lib/stores/nav-bar-selected";

    let { children } = $props();

    onMount(() => {
        checkAuth();
        initNavBar();
    });

</script>

<Navbar/>

{@render children()}
