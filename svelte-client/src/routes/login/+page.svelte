<script>
    import { Card } from "flowbite-svelte";
    import { attemptLogin } from "$lib/stores/authentication";
    import { goto } from "$app/navigation";

    let username = "";
    let password = "";

    let errorMessage = "";

    // @ts-ignore
    async function onSubmit(event) {
        event.preventDefault();

        if (!username.trim() || !password.trim()) return;

        const { success, message } = await attemptLogin(username, password);
        if (success) goto("/home");
        else errorMessage = message;
    }
</script>

<div class="flex items-center justify-center h-screen">
    <Card class="flex items-center justify-center bg-secondary-background">
        <h5 class="mb-4 text-2xl font-bold tracking-tight text-title-text">
            Log in
        </h5>

        <form on:submit={onSubmit}>
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
                <a href="/signup"> No account ? Sign up </a>
            </div>

            {#if errorMessage}
                <div class='mb-4'>
                    <p class="text-red-500">{errorMessage}</p>
                </div>
            {/if}

            <!-- Submit Button -->
            <button
                type="submit"
                class="w-full py-2 px-4 bg-accent text-sky-950 font-semibold rounded-lg focus:ring-accent focus:ring-2"
            >
                Log in
            </button>
        </form>
    </Card>
</div>
