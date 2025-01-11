<script>
    import { restTimer } from "$lib/stores/sessions/rest-timer";
    import Modal from "../ui/modal.svelte";

    let visible = restTimer.isVisible;
</script>

<Modal visible={$visible} close={() => restTimer.close()}>
    <div
        class="flex items-start justify-center"
    >
        <div class="flex items-center justify-center w-32 h-32 mt-4">
            <button
                class="text-4xl text-white"
                onclick={() => restTimer.add(-15)}>-</button
            >
        </div>
        <div
            class="flex items-center justify-center w-32 h-32 rounded-full border-4 border-white mt-4"
        >
            <p class="text-4xl text-white">{$restTimer}</p>
        </div>
        <div class="flex items-center justify-center w-32 h-32 mt-4">
            <button
                class="text-4xl text-white"
                onclick={() => restTimer.add(15)}>+</button
            >
        </div>
    </div>
</Modal>
