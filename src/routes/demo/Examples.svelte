<script>
    import { goto } from '$app/navigation';
    import { user, offset } from '$lib/store.js';
    import { onMount } from "svelte";
    import { base } from '$app/paths';
    import { SvelteToast, toast } from '@zerodevx/svelte-toast';
    import { dev } from '$app/environment';

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    let num_completed = 0;

    let events_log = [];

    let MAX_ANNOTATION = 1;
    let MAX_PROGRAMS = 30;
    let USER_COMPLETED = 0;

    let LITERAL_MODEL_URL = "https://c0vmrzlr7laeho8b.us-east-1.aws.endpoints.huggingface.cloud";
    let PRAGMATIC_MODEL_URL = "https://sqv1rlpqi9lshx3r.us-east-1.aws.endpoints.huggingface.cloud";

    let regex = "";
    let progid = "";

    let current_utterance_string = "";
    let current_utterance_label = null;

    let utterances = [];

    let literal_guess = "";
    let literal_guess_correct = false;

    let pragmatic_guess = "";
    let pragmatic_guess_correct = false;

    let id = 0;

    function addUtterance() {
        events_log = [...events_log, {"string": current_utterance_string, "label": current_utterance_label, "id": id}]
        if (current_utterance_string.length > 0) {
            if (current_utterance_label === null) {
                toast.push("Label not provided", { 
                    theme: {
                        '--toastBarHeight': 0,
                        '--toastBackground': 'red'
                    }
                });
                return;
            }
            else {
                for (var u of utterances) {
                    if (current_utterance_string == u["string"]) {
                        toast.push("This example has already been provided", { 
                            theme: {
                                '--toastBarHeight': 0,
                                '--toastBackground': 'red'
                            }
                        });
                        return;
                    }
                }
                if (current_utterance_label == "+" && current_utterance_string.match(`^${regex}$`)) {
                    utterances = [...utterances, {"string": current_utterance_string, "label": current_utterance_label, "id": id}];
                    current_utterance_string = "";
                    current_utterance_label = null;
                    id += 1;
                }
                else if (current_utterance_label == "-" && !current_utterance_string.match(`^${regex}$`)) {
                    utterances = [...utterances, {"string": current_utterance_string, "label": current_utterance_label, "id": id}];
                    current_utterance_string = "";
                    current_utterance_label = null;
                    id += 1;
                }
                else {
                    toast.push("Label does not match string", { 
                        theme: {
                            '--toastBarHeight': 0,
                            '--toastBackground': 'red'
                        }
                    });
                    return;
                }
            }
        }
        else {
            toast.push("Please enter a valid string", { 
				theme: {
					'--toastBarHeight': 0,
					'--toastBackground': 'red'
				}
			});
			return;
        }

        synthesize();
    }

    async function synthesize() {
        literal_guess = "..."
        let literal_answer = await fetch(LITERAL_MODEL_URL, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "inputs": {
                "true_program": regex,
                "spec": utterances
                }
            })
        }).then(response => response.json());

        if (literal_answer) {
            if (literal_answer["guess"]) {
                literal_guess = literal_answer["guess"];
            }
            else {
                literal_guess = "<regex not found>";
            }
            if (literal_answer["top_1_success"]) {
                literal_guess_correct = true;
            }
        }

        pragmatic_guess = "..."
        let pragmatic_answer = await fetch(PRAGMATIC_MODEL_URL, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            // "Authorization": "Bearer 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"
            },
            body: JSON.stringify({
                "inputs": {
                "true_program": regex,
                "spec": utterances
                }
            })
        }).then(response => response.json());

        if (pragmatic_answer) {
            if (pragmatic_answer["guess"]) {
                pragmatic_guess = pragmatic_answer["guess"];
            }
            else {
                pragmatic_guess = "<regex not found>";
            }
            if (pragmatic_answer["top_1_success"]) {
                pragmatic_guess_correct = true;
            }
        }
    }

    function removeUtterance(id) {
        utterances = utterances.filter(utt => utt.id != id);
    }

    async function submitUtterances() {
        console.log(progid);
        await fetch(`https://regex-interact-default-rtdb.firebaseio.com/user_study/${progid}/interaction/${$user}/full_spec.json`, {
            method: "PUT",
            body: JSON.stringify(utterances)
        })
        await fetch(`https://regex-interact-default-rtdb.firebaseio.com/user_study/${progid}/interaction/${$user}/completed.json`, {
            method: "PUT",
            body: JSON.stringify(true)
        })
        utterances = [];

        await loadRegex().then(response => {});
    }

    async function loadRegex() {
        // if (dev) {
        //     user.set("dev");
        //     MAX_ANNOTATION = 10;
        //     MAX_PROGRAMS = 10;
        // }
        // else if ($user.length == 0) {
        //     goto(`${base}/interact/login`)
        // }

        let data = await fetch("https://regex-interact-default-rtdb.firebaseio.com/user_study.json")
        .then(response => response.json());

        let completed = new Object();
        let candidates = new Object();
        for (var x in data) {
            if (data[x].hasOwnProperty("interaction")) {
                let completed_interaction = false;
                if (data[x]["interaction"].hasOwnProperty($user) && data[x]["interaction"][$user].hasOwnProperty("completed")) {
                    if (data[x]["interaction"][$user]["completed"]) {
                        completed_interaction = true;
                    }
                }

                if (data[x]["interaction"].hasOwnProperty($user) && completed_interaction) {
                    completed[x] = data[x];
                }
                if (Object.keys(data[x]["interaction"]).length < MAX_ANNOTATION) {
                    candidates[x] = data[x];
                }
            }
            else {
                candidates[x] = data[x];
            }
        }


        let j = getRandomInt(0, Object.keys(candidates).length);
        console.log(j);
        let i = 0
        for (var x in candidates) {
            if (i == j) {
                progid = x;
                regex = candidates[x]["program"];
                console.log(x, candidates[x]);
                console.log(progid, regex);
                // let created_record = await fetch(`https://regex-interact-default-rtdb.firebaseio.com/user_study/${progid}/interaction/${$user}/completed.json`, {
                //     method: "PUT",
                //     body: JSON.stringify(false)
                // }).then(response => response.json());
                literal_guess = "";
                literal_guess_correct = false;
                pragmatic_guess = "";
                pragmatic_guess_correct = false;
                return;
            }
            i += 1;
        }


    }

    onMount(loadRegex);
</script>

<div class="col-lg-10 mx-auto p-3 py-md-5">
    <h1>PraX demo</h1>
    <p>
        Here, you are presented with a regular expression. You can interact with two systems and communicate the regular expression using examples. Each example is a string (which you can type in the text box) and an example (+ to indicate that the string should match the synthesized regex and - to indicate that it should not). Click "Add" once you have entered your example, and both systems will try to guess the regular expression. You can refresh to communite a different regular expression.
    </p>

    <div class="col-10 py-md-3">
        <h2>Regex: <tt>{regex}</tt></h2>
    </div>
    
    {#if literal_guess_correct}
        <div class="col-sm-10 py-md-3">
            <h2>Literal system's guess: <tt style="color:green">{literal_guess}</tt></h2>
        </div>
    {:else}
        <div class="col-lg-10 py-md-3">
            <h2>Literal system's guess: <tt style="color:red">{literal_guess}</tt></h2>
        </div>
    {/if}

    {#if pragmatic_guess_correct}
        <div class="col-lg-10 py-md-3">
            <h2>PraX guess: <tt style="color:green">{pragmatic_guess}</tt></h2>
        </div>
    {:else}
        <div class="col-lg-10 py-md-3">
            <h2>PraX guess: <tt style="color:red">{pragmatic_guess}</tt></h2>
        </div>
    {/if}

    {#if (literal_guess_correct || pragmatic_guess_correct)}
    <h2 style="color:green">Succeeded!</h2>
    {:else}
        <div class="row gx-1">
            <div class="input-group col">
                <span class="input-group-text">Enter example</span>
                <input type="text" class="form-control" bind:value={current_utterance_string} >
                <input type="radio" class="btn-check" bind:group={current_utterance_label} name="utterance-type" value={"+"} id="positive" autocomplete="off">
                <label class="btn btn-outline-primary" for="positive"><i class="fa-solid fa-plus"></i></label>
                <input type="radio" class="btn-check" bind:group={current_utterance_label} name="utterance-type" value={"-"} id="negative" autocomplete="off">
                <label class="btn btn-outline-danger" for="negative"><i class="fa-solid fa-minus"></i></label>
            </div>
            <div class="col">
                <button type="submit" class="btn btn-primary col-auto" on:click={addUtterance}>Add</button>
            </div>
        </div>
    {/if}

    <div class="col-lg-6 py-md-5">
        <ul class="list-group">
            {#each utterances as utt}
                {#if utt.label == "+"}
                <div class="list-group list-group-horizontal py-md-1">
                    <li class="list-group-item list-group-item flex-fill">{utt.string}</li>
                    <li class="list-group-item list-group-item-primary"><i class="fa-solid fa-plus"></i></li>
                    <li class="list-group-item list-group-item"><i class="fa-solid fa-minus"></i></li>
                    <li class="list-group-item list-group-item-primary">{utt.string}<button class="btn btn-default btn-sm float-end" on:click={() => removeUtterance(utt.id)} ><i class="fa fa-times" /></button></li>
                </div>
                {:else if utt.label == "-"}
                    <div class="list-group list-group-horizontal py-md-1">
                        <li class="list-group-item list-group-item flex-fill">{utt.string}</li>
                        <li class="list-group-item list-group-item"><i class="fa-solid fa-plus"></i></li>
                        <li class="list-group-item list-group-item-danger"><i class="fa-solid fa-minus"></i></li>
                        <li class="list-group-item list-group-item-danger">{utt.string}<button class="btn btn-default btn-sm float-end" on:click={() => removeUtterance(utt.id)} ><i class="fa fa-times" /></button></li>
                    </div>
                {/if}
            {/each}
        </ul>
    </div>
    <SvelteToast />
</div>
  
<style>
</style>