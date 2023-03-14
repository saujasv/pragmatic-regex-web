<script>
    import { user, db } from '$lib/store.js';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { SvelteToast, toast } from '@zerodevx/svelte-toast';
    import { base } from '$app/paths';

    let N_OPTIONS_CONTEXT = 0;
    let MAX_VERIFICATION = 2;
    let N_QUESTIONS = 2;
    let answered_idx = [];
    let N = 0;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }


    async function loadTasks() {
        if ($user.length == 0) {
            goto(`${base}/annotate/login`)
        }

        let data = await fetch(`${db}/pilot-options.json`).then(response => response.json()).catch(error => {
            console.log(error);
            return [];
        });

        let completed = new Object();
        let candidates = new Object();
        for (var x in data) {
            if (data[x].hasOwnProperty("verifications")) {
                if (data[x]["verifications"].hasOwnProperty($user)) {
                    completed[x] = data[x];
                }
                if (Object.keys(data[x]["verifications"]).length < MAX_VERIFICATION) {
                    candidates[x] = data[x];
                }
            }
            else {
                candidates[x] = data[x];
            }
        }

        if (Object.keys(completed).length >= N_QUESTIONS) {
            goto(`${base}/annotate/examples`);
        }

        if (Object.keys(candidates).length == 0) {
            goto(`${base}/annotate/examples`);
        }

        let j = getRandomInt(0, Object.keys(candidates).length);
        console.log(j);
        let i = 0
        for (var x in candidates) {
            if (i == j) {
                question_id = x;
                question = candidates[x];
                answer = null;
                console.log(x, candidates[x]);
                console.log(question_id, question);
                return;
            }
            i += 1;
        }
    }

    let question_id = "";
    let question = {
        examples: [],
        options: []
    };

    let answer = null;

    async function handleSubmit() {
        if (answer === null) {
            toast.push("Please answer to proceed", { 
				theme: {
					'--toastBarHeight': 0,
					'--toastBackground': 'red'
				}
			});
			return;
        }

        console.log(question_id);
        await fetch(`https://try-regex-default-rtdb.firebaseio.com/pilot-options/${question_id}/verifications/${$user}.json`, {
            method: "PUT",
            body: answer
        });

        N += 1;
        // question_id = "";
        // question = {
        //     examples: [],
        //     options: []
        // };

        // goto(`${base}/annotate/verify`);
        loadTasks();
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
        You are given a list of examples of strings. The strings in <button class="btn btn-mini btn-primary">blue</button> are positive examples and those in <button class="btn btn-mini btn-danger">red</button> are negative examples. You are also given options of regular expressions. You need to choose which regular expression best fits the given set of examples. If there are multiple consistent regular expressions, choose the one you think a person who provided these examples was most likely to refer to.
    </div>

    {#key N}
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
            <input type="radio" class="btn-check" name="utterance-type" value={opt.id} id="{opt.id}" autocomplete="off" bind:group={answer}>
            {#if opt.ground_truth}
                <label class="btn btn-outline-primary" for="{opt.id}"><tt>{opt.regex}</tt></label>
            {:else if opt.sat}
                <label class="btn btn-outline-success" for="{opt.id}"><tt>{opt.regex}</tt></label>
            {:else}
                <label class="btn btn-outline-dark" for="{opt.id}"><tt>{opt.regex}</tt></label>
            {/if}
        {/each}
    </div>

    <div class="col-lg-10 py-md-5">
        <button class="btn btn-success btn-lg float-end" on:click={handleSubmit}>Submit</button>
    </div>
    {/key}
    <SvelteToast />
</div>

<style>
</style>
