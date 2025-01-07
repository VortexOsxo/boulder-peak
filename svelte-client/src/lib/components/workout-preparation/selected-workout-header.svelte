<script>
    import Modal from "$lib/components/ui/modal.svelte";
    import {
        loadWorkoutSchema,
        saveWorkoutSchema,
        workoutSchemas,
        workoutName,
    } from "$lib/stores/workout/workout-schema";
    import { onMount } from "svelte";
    import AccentButton from "../ui/accent-button.svelte";
    import DefaultButton from "../ui/default-button.svelte";

    let visible = $state(false);
    let modalState = $state(0);
    let savedName = $state("");

    function close() {
        modalState = 0;
        savedName = "";
        visible = false;
    }
</script>

<div
    class="p-4 rounded mb-4 bg-secondary-background flex justify-between items-center"
>
    <h1 class="text-xl font-bold text-title-text">{$workoutName}</h1>
    <button class="text-accent text-3xl" onclick={() => (visible = true)}>
        &#8230
    </button>

    <Modal {visible}>
        <div class="flex flex-col space-y-4">
            {#if modalState === 0}
                <DefaultButton
                    onclick={() => (modalState = 2)}
                    tailwind="font-bold"
                >
                    Load Workout
                </DefaultButton>

                <DefaultButton
                    onclick={() => (modalState = 1)}
                    tailwind="font-bold"
                >
                    Save Workout
                </DefaultButton>
            {:else if modalState === 1}
                <input
                    type="text"
                    bind:value={savedName}
                    class="bg-primary-backgroud rounded-lg m-2"
                    placeholder="Workout Name"
                />
                <AccentButton
                    tailwind="font-bold"
                    onclick={() => {
                        saveWorkoutSchema(savedName);
                        close();
                    }}>Save Workout</AccentButton
                >
            {:else if modalState === 2}
                {#each $workoutSchemas as schema}
                    <button
                        onclick={() => {
                            loadWorkoutSchema(schema);
                            close();
                        }}
                    >
                        {schema.name}, {schema.exercises.length} exercises
                    </button>
                {/each}
            {/if}
            <DefaultButton onclick={close} tailwind="font-bold">
                Cancel
            </DefaultButton>
        </div>
    </Modal>
</div>
