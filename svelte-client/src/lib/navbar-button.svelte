<script lang="ts">
    import { page } from '$app/stores';

    let { name, path = name } = $props();

    let isActive = $derived($page.url.pathname === ('/'+name));
</script>

<a
    href={path}
    class={`flex justify-center items-center h-4/5 w-1/5 ${isActive ? 'text-accent' : 'text-black'}`}
>
    <img 
        src={`/navbar/${isActive ? name + "-selected" : name}.png`} 
        alt={name} 
        class="w-6 h-6 m-1"
    />
    <p class="font-helvetica text-lg">{name}</p>
</a>
