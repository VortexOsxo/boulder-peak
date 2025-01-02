<script>
    import { attemptSignUp } from "$lib/stores/authentication";
    import AuthForm from "$lib/components/auth-form.svelte";
</script>

<AuthForm
    title="Sign up"
    authFunc={attemptSignUp}
    redirect="/login"
    redirectMessage="Have an account ? Log in"
    succesRedirect="/login"
/>
