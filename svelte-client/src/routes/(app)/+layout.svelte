<script>
    import Navbar from "$lib/navbar.svelte";
    import { onMount } from 'svelte';
    import { checkAuth } from '$lib';

    let { children } = $props();

    onMount(() => {
        checkAuth();
    });

</script>

<Navbar/>

{@render children()}
