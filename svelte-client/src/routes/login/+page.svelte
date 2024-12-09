<script>
    import { Card } from "flowbite-svelte";
</script>


<div class="flex items-center justify-center h-screen">
    <Card class="flex items-center justify-center bg-secondarybackground">
        <h5 class="mb-4 text-2xl font-bold tracking-tight text-text">
            Log in
        </h5>

        <form action="#" method="POST">
            <!-- Username Field -->
            <div class="mb-4">
                <label for="username" class="block text-sm font-medium text-text">Username</label>
                <input type="text" id="username" name="username" required
                    class="mt-2 p-2 w-full bg-primarybackgroud rounded-lg">
            </div>

            <!-- Password Field -->
            <div class="mb-4">
                <label for="password" class="block text-sm font-medium text-text">Password</label>
                <input type="password" id="password" name="password" required
                    class="mt-2 p-2 w-full bg-primarybackgroud rounded-lg">
            </div>

            <!-- Submit Button -->
            <button type="submit"
                class="w-full py-2 px-4 bg-accent text-sky-950 font-semibold rounded-lg focus:ring-accent focus:ring-2">
                Log in
            </button>
        </form>
    </Card>
</div>
