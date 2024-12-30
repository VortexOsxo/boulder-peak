<script lang="ts">
    import { goto } from '$app/navigation';
    import { navBarSelected } from './stores/nav-bar-selected';

    let { name } = $props();

    let isActive = $derived($navBarSelected === name);

    function navigate() {
        navBarSelected.set(name);
        goto(`/${name}`);
    }
</script>

<button
    onclick="{navigate}"
    class={`flex justify-center items-center h-4/5 w-1/5 ${isActive ? 'text-accent' : 'text-black'}`}
>
    <img 
        src={`/navbar/${isActive ? name + "-selected" : name}.png`} 
        alt={name} 
        class="w-6 h-6 m-1"
    />
    <p class="font-helvetica text-lg">{name}</p>
</button>
