<script>
    let { data } = $props();
</script>

<div class="bg-secondary-background p-4 rounded-lg">
    <p class="mb-4 text-title-text">Name: {data.drill.name}</p>
    <p class="text-main-text">Description: {data.drill.description}</p>
</div>
