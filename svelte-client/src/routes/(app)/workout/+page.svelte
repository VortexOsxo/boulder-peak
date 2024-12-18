<script>
    import { onMount } from "svelte";
    import { getAuthorizationHeader } from "$lib";
    import ExerciseList from "$lib/components/exercise-list.svelte";

    let message = "";

    onMount(() =>
        fetch("http://127.0.0.1:5000/training/", {
            method: "GET",
            headers: { Authorization: getAuthorizationHeader() },
        }).then((response) =>
            response.text().then((text) => message = text),
        ),
    );
</script>

<p>Workout</p>
<ExerciseList/>
