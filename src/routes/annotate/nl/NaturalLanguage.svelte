<script>
    import { goto } from '$app/navigation';
    import { user } from '$lib/store.js';
    import { onMount } from "svelte";

    let num_completed = 0;

    let MAX_N = 1;

    let regex = "";

    let current_description = "";

    async function submitUtterances() {
        await fetch(`https://try-regex-default-rtdb.firebaseio.com/nl.json`, {
            method: "PUT",
            body: JSON.stringify({
                program: regex,
                user: $user,
                description: current_description
            })
        })

        current_description = "";

        num_completed += 1;

        if (num_completed >= MAX_N) {
            goto("/pragmatic-regex-web/annotate/finish");
        }

        await loadRegex().then(response => {});
    }

    async function loadRegex() {
        if ($user.length == 0) {
            goto("/pragmatic-regex-web/annotate/login")
        }

        await fetch("https://try-regex-default-rtdb.firebaseio.com/programs.json")
        .then(response => response.json())
        .then(data => {
            let n = data.length;
            regex = data[Math.floor(Math.random() * (n - 1))];
        }).catch(error => {
            console.log(error);
            return [];
        });
    }

    onMount(loadRegex);
</script>

<div class="col-lg-10 mx-auto p-3 py-md-5">
    
    <div class="col-lg-10 py-md-3">
        <h2>Regex: <tt>{regex}</tt></h2>
    </div>

    <div class="row gx-1">
        <div class="input-group col">
            <span class="input-group-text">Enter a natural language description of the regular expression</span>
            <input type="text" class="form-control" bind:value={current_description} >
        </div>
    </div>

    <div class="col-lg-6 py-md-5">
        <button class="btn btn-success btn-lg float-end" on:click={submitUtterances}>Submit</button>
    </div>
</div>
  
<style>
</style>