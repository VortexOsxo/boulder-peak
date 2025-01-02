<script>
    import Navbar from "$lib/components/navbar/navbar.svelte";
    import { onMount } from 'svelte';
    import { checkAuth } from '$lib';
    import { initNavBar } from "$lib/stores/nav-bar-selected";
    import { fetchExercises } from "$lib/stores/exercices";

    let { children } = $props();

    onMount(() => {
        checkAuth();
        initNavBar();
        fetchExercises();
    });

</script>

<Navbar/>

{@render children()}
