<script>
    import { attemptLogin } from "$lib/stores/authentication";
    import AuthForm from "$lib/components/auth-form.svelte";
</script>

<AuthForm
    title="Log in"
    authFunc={attemptLogin}
    redirect="/signup"
    redirectMessage="No account ? Sign up"
    succesRedirect="/workout"
/>
