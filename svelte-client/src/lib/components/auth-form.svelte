<script>
    import { goto } from "$app/navigation";
    import { Card } from "flowbite-svelte";

    let { title, authFunc, redirect, redirectMessage, succesRedirect } = $props();

    let username = $state("");
    let password = $state("");
    let errorMessage = $state("");

    // @ts-ignore
    async function onSubmit(event) {
        event.preventDefault();

        if (!username.trim() || !password.trim()) return;

        const { success, message } = await authFunc(username, password);
        if (success) goto(succesRedirect);
        else errorMessage = message;
    }
</script>

<div class="flex items-center justify-center h-screen">
    <Card class="flex items-center justify-center bg-secondary-background">
        <h5 class="mb-4 text-2xl font-bold tracking-tight text-title-text">
            {title}
        </h5>

        <form onsubmit={onSubmit}>
            <!-- Username Field -->
            <div class="mb-4">
                <label
                    for="username"
                    class="block text-sm font-medium text-main-text"
                    >Username</label
                >
                <input
                    type="text"
                    id="username"
                    name="username"
                    bind:value={username}
                    required
                    class="mt-2 p-2 w-full bg-primary-backgroud rounded-lg"
                />
            </div>

            <!-- Password Field -->
            <div class="mb-4">
                <label
                    for="password"
                    class="block text-sm font-medium text-main-text"
                    >Password</label
                >
                <input
                    type="password"
                    id="password"
                    name="password"
                    bind:value={password}
                    required
                    class="mt-2 p-2 w-full bg-primarybackgroud rounded-lg"
                />
            </div>

            <div class="mb-4">
                <a href={redirect}> {redirectMessage} </a>
            </div>

            {#if errorMessage}
                <div class="mb-4">
                    <p class="text-red-500">{errorMessage}</p>
                </div>
            {/if}

            <!-- Submit Button -->
            <button
                type="submit"
                class="w-full py-2 px-4 bg-accent text-sky-950 font-semibold rounded-lg focus:ring-accent focus:ring-2"
            >
                {title}
            </button>
        </form>
    </Card>
</div>
