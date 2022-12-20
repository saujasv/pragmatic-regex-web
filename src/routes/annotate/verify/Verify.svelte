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
        if ($user.length == 0) {
            goto("/annotate/login")
        }

        await fetch(`https://try-regex-default-rtdb.firebaseio.com/collect-test-verify-sampled-options/${N_OPTIONS_CONTEXT}.json`)
        .then(response => response.json())
        .then(data => {
            let data_copy = [...data];
            data_copy.sort((x, y) => (x.n_verifications > y.verifications) ? 1 : ((x.id < y.id) ? 0 : 1));
            let qs = [];
            for (let i = 0; i < N_QUESTIONS; i += 1) {
                qs = [...qs, data_copy[i]];
                for (let j = 0; j < data.length; j += 1) {
                    if (data[j].id == data_copy[i].id) {
                        answered_idx = [...answered_idx, j];
                    }
                }
            }
            console.log(qs);
            questions = qs;
            answers = Object.fromEntries(Object.entries(questions).map(([k, v], i) => [v.id, null]));
            console.log(answers);
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
        await fetch(`https://try-regex-default-rtdb.firebaseio.com/collect-test/${$user}.json`, {
            method: "PUT",
            body: JSON.stringify(answers)
        });

        goto("/annotate/examples");
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
        In each of the following questions, you are given a list of examples of strings. The strings in <button class="btn btn-mini btn-primary">blue</button> are positive examples and those in <button class="btn btn-mini btn-danger">red</button> are negative examples. In each case, you are also given options of regular expressions. You need to determine which regular expression matches the given strings.
    </div>

    {#each questions as question, i}
        <div class="col-lg-10 pt-md-5 pb-md-1"><h2>Question {i + 1}</h2></div>

        <div class="list-group col-lg-10 py-md-3">
            {#each question.examples as ex}
                {#if ex.label == "+"}
                    <li class="list-group-item list-group-item-primary">{ex.string}</li>
                {:else if ex.label == "-"}
                    <li class="list-group-item list-group-item-danger">{ex.string}</li>
                {/if}
            {/each}
        </div>

        <div class="btn-group-vertical col-lg-10 py-md-3">
            {#each question.options as opt}
                <input type="radio" class="btn-check" name="utterance-type-{i}" value={opt.id} id="{i}-{opt.id}" autocomplete="off" bind:group={answers[question.id]}>
                {#if opt.correct}
                    <label class="btn btn-outline-success" for="{i}-{opt.id}"><tt>{opt.regex}</tt></label>
                {:else}
                    <label class="btn btn-outline-dark" for="{i}-{opt.id}"><tt>{opt.regex}</tt></label>
                {/if}
            {/each}
        </div>
    {/each}

    <div class="col-lg-10 py-md-5">
        <button class="btn btn-success btn-lg float-end" on:click={handleSubmit}>Submit</button>
    </div>

    <SvelteToast />
</div>

<style>
</style>