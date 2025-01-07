<script>
    // @ts-nocheck

    import { Card } from "flowbite-svelte";
    let { form } = $props();

    let title = "Log in";
    let redirect = "/signup";
    let redirectMessage = "No account ? Sign up";
</script>

<div class="flex items-center justify-center h-screen">
    <Card class="flex items-center justify-center bg-secondary-background">
        <h5 class="mb-4 text-2xl font-bold tracking-tight text-title-text">
            {title}
        </h5>

        <form method="POST" action="?/login">
            <!-- Username Field -->
            <div class="mb-4">
                <label
                    for="username"
                    class="block text-sm font-medium text-main-text"
                    >Username</label
                >
                <input
                    type="text"
                    name="username"
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
                    name="password"
                    required
                    class="mt-2 p-2 w-full bg-primarybackgroud rounded-lg"
                />
            </div>

            <div class="mb-4">
                <a href={redirect}> {redirectMessage} </a>
            </div>

            <div class="mb-4 text-red-500">
                {form?.error}
            </div>

            <!-- Submit Button -->
            <button
                class="w-full py-2 px-4 bg-accent text-sky-950 font-semibold rounded-lg focus:ring-accent focus:ring-2"
            >
                {title}
            </button>
        </form>
    </Card>
</div>
