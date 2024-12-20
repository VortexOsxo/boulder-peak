<script>
    import { Card } from "flowbite-svelte";
    import { goto } from "$app/navigation";

    let username = "";
    let password = "";

    // @ts-ignore
    async function onSubmit(event) {
        event.preventDefault();

        if (!username.trim() || !password.trim()) return;

        const response = await fetch("http://127.0.0.1:5000/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) goto('/login');
    }

</script>

<div class="flex items-center justify-center h-screen">
    <Card class="flex items-center justify-center bg-secondary-background">
        <h5 class="mb-4 text-2xl font-bold tracking-tight text-text">
            Sign up
        </h5>

        <form on:submit={onSubmit}>
            <!-- Username Field -->
            <div class="mb-4">
                <label
                    for="username"
                    class="block text-sm font-medium text-text">Username</label
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
                    class="block text-sm font-medium text-text">Password</label
                >
                <input
                    type="password"
                    id="password"
                    name="password"
                    bind:value={password}
                    required
                    class="mt-2 p-2 w-full bg-primary-backgroud rounded-lg"
                />
            </div>

            <!-- Submit Button -->
            <button
                type="submit"
                class="w-full py-2 px-4 bg-accent text-sky-950 font-semibold rounded-lg focus:ring-accent focus:ring-2"
            >
                Sign up
            </button>
        </form>
    </Card>
</div>
