<script>
    import { user, db } from '$lib/store.js';
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { SvelteToast, toast } from '@zerodevx/svelte-toast';
    import { base } from '$app/paths';
    import { dev } from '$app/environment';

    let USER_COMPLETED = 0;
    let MAX_VERIFICATION = 2;
    let N_QUESTIONS = 40;
    let N = 0;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }


    async function loadTasks() {
        if (dev) {
            user.set("dev");
            MAX_VERIFICATION = 1;
            N_QUESTIONS = 2;
        }
        if ($user.length == 0) {
            goto(`${base}/annotate/login`)
        }

        let data = await fetch(`${db}/options.json`).then(response => response.json()).catch(error => {
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
                else if (Object.keys(data[x]["verifications"]).length < MAX_VERIFICATION) {
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

        USER_COMPLETED = Object.keys(completed).length

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
        await fetch(`${db}/options/${question_id}/verifications/${$user}.json`, {
            method: "PUT",
            body: answer
        });

        N += 1;
        
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

    <div class="col-lg-10 pt-md-1 pb-md-1 text-center">
        <h4>Completed {USER_COMPLETED} of {N_QUESTIONS} tasks in this phase</h4>
    </div>

    <div class="col-lg-10 pt-md-1 pb-md-1 text-center">
        <h2>You are now the guesser</h2>
    </div>

    <div class="col-lg-10 pt-md-1 pb-md-1">
        You are given a list of examples provided by a describer. You are also given options of regular expressions. You need to choose which regular expression best fits the given set of examples. If there are multiple correct regular expressions, choose the one you think the describer was most likely trying to communicate about.
    </div>

    {#key N}
    <div class="col-lg-10 py-md-3">
        {#each question.examples as ex}
            {#if ex.label == "+"}
            <div class="list-group list-group-horizontal py-md-1">
                <li class="list-group-item list-group-item flex-fill">{ex.string}</li>
                <li class="list-group-item list-group-item-primary"><i class="fa-solid fa-plus"></i></li>
                <li class="list-group-item list-group-item"><i class="fa-solid fa-minus"></i></li>
            </div>
            {:else if ex.label == "-"}
            <div class="list-group list-group-horizontal py-md-1">
                <li class="list-group-item list-group-item flex-fill">{ex.string}</li>
                <li class="list-group-item list-group-item"><i class="fa-solid fa-plus"></i></li>
                <li class="list-group-item list-group-item-danger"><i class="fa-solid fa-minus"></i></li>
            </div>
            {/if}
        {/each}
    </div>

    <div class="btn-group-vertical col-lg-10 py-md-3">
        {#each question.options as opt}
            <input type="radio" class="btn-check" name="utterance-type" value={opt.id} id="{opt.id}" autocomplete="off" bind:group={answer}>
            <!-- {#if opt.ground_truth}
                <label class="btn btn-outline-primary" for="{opt.id}"><tt>{opt.regex}</tt></label>
            {:else if opt.sat}
                <label class="btn btn-outline-success" for="{opt.id}"><tt>{opt.regex}</tt></label>
            {:else} -->
                <label class="btn btn-outline-dark" for="{opt.id}"><tt>{opt.regex}</tt></label>
            <!-- {/if} -->
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
