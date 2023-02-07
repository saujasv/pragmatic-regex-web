<script>
    import { user } from '$lib/store.js';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { SvelteToast, toast } from '@zerodevx/svelte-toast';

    let N_OPTIONS_CONTEXT = 0;
    let MAX_VERIFICATION = 2;
    let N_QUESTIONS = 5;
    let answered_idx = [];

    async function loadTasks() {
        // if ($user.length == 0) {
        //     goto("/annotate/login")
        // }

        await fetch(`https://try-regex-default-rtdb.firebaseio.com/nl-verify-2.json`)
        .then(response => response.json())
        .then(data => {
            questions = data;
            answers = Object.fromEntries(Object.entries(questions).map(([k, v], i) => [v.id, null]));
        }).catch(error => {
            console.log(error);
            return [];
        });
    }

    let questions = [];

    let answers = [];

    async function handleSubmit() {
        for (let qid in answers) {
            if (answers[qid] === null) {
                toast.push("Please answer all the questions to proceed.", { 
                    theme: {
                        '--toastBarHeight': 0,
                        '--toastBackground': 'red'
                    }
                });
                return;
            }
        }

        let username = $user;
        await fetch(`https://try-regex-default-rtdb.firebaseio.com/collect-nl-verify/${$user}.json`, {
            method: "PUT",
            body: JSON.stringify(answers)
        });

        goto("/pragmatic-regex-web/annotate/examples");
    }

    onMount(loadTasks);
</script>

<div class="col-lg-6 mx-auto p-3 pt-md-5 pb-md-3">
    <!-- <header class="d-flex align-items-center mb-5 border-bottom">
        <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
            <span class="fs-4">Regular expressions from examples</span>
        </a>
    </header> -->

    <div class="col-lg-10 pt-md-1 pb-md-1">
        In each of the following questions, you are given a set of examples and English descriptions of two regular expressions. Determine which regular expression described in English the set of examples is consistent with.
    </div>

    {#each questions as question, i}
        <div class="col-lg-10 pt-md-5 pb-md-1"><h2>Question {i + 1}</h2></div>

        <h3>Examples</h3>
        <div class="list-group col-lg-10 py-md-3">
            {#each question.examples as ex}
                {#if ex.label == "+"}
                    <li class="list-group-item list-group-item-primary">{ex.string}</li>
                {:else if ex.label == "-"}
                    <li class="list-group-item list-group-item-danger">{ex.string}</li>
                {/if}
            {/each}
        </div>

        <p>Which description is of a regular expression that is consistent with the given set of examples??</p>
        <div class="btn-group-vertical col-lg-10 py-md-3">
            <input type="radio" class="btn-check" name="utterance-set-{i}" value=1 id="{i}-opt1" autocomplete="off" bind:group={answers[question.id]}>
            <label class="btn btn-outline-dark" for="{i}-opt1"><tt>{question.opt1}</tt></label>
            <input type="radio" class="btn-check" name="utterance-set-{i}" value=2 id="{i}-opt2" autocomplete="off" bind:group={answers[question.id]}>
            <label class="btn btn-outline-dark" for="{i}-opt2"><tt>{question.opt2}</tt></label>
        </div>
    {/each}

    <div class="col-lg-10 py-md-5">
        <button class="btn btn-success btn-lg float-end" on:click={handleSubmit}>Submit</button>
    </div>

    <SvelteToast />
</div>

<style>
</style>