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

    let regex = "";
    let progid = "";

    let current_utterance_string = "";
    let current_utterance_label = null;

    let utterances = [];

    let guess = "";
    let guess_correct = false;

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
        if ((USER_COMPLETED + $offset) % 3 == 0) {
            guess = ""
            let answer = await fetch(`https://sqv1rlpqi9lshx3r.us-east-1.aws.endpoints.huggingface.cloud`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
                },
                body: JSON.stringify({
                    "inputs": {
                    "true_program": regex,
                    "spec": utterances
                    }
                })
            }).then(response => response.json());

            if (answer) {
                guess = answer["guess"];
                if (answer["top_1_success"]) {
                    guess_correct = true;
                }

                await fetch(`https://regex-interact-default-rtdb.firebaseio.com/user_study/${progid}/interaction/${$user}/${utterances.length}.json`, {
                    method: "PUT",
                    body: JSON.stringify({
                        "listener_idx": (USER_COMPLETED + $offset) % 3,
                        "response": answer
                    })
                })
            }
        }
        else if ((USER_COMPLETED + $offset) % 3 == 1) {
            guess = ""
            let answer = await fetch(`https://c0vmrzlr7laeho8b.us-east-1.aws.endpoints.huggingface.cloud`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
                },
                body: JSON.stringify({
                    "inputs": {
                    "true_program": regex,
                    "spec": utterances
                    }
                })
            }).then(response => response.json());

            if (answer) {
                guess = answer["guess"];
                if (answer["top_1_success"]) {
                    guess_correct = true;
                }

                await fetch(`https://regex-interact-default-rtdb.firebaseio.com/user_study/${progid}/interaction/${$user}/${utterances.length}.json`, {
                    method: "PUT",
                    body: JSON.stringify({
                        "listener_idx": (USER_COMPLETED + $offset) % 3,
                        "response": answer
                    })
                })
            }
        }
        else {
            guess = ""
            let answer = await fetch(`https://fa096oepnph7ti6r.us-east-1.aws.endpoints.huggingface.cloud`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer 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"
                },
                body: JSON.stringify({
                    "inputs": {
                    "true_program": regex,
                    "spec": utterances
                    }
                })
            }).then(response => response.json());

            if (answer) {
                guess = answer["guess"];
                if (answer["top_1_success"]) {
                    guess_correct = true;
                }

                await fetch(`https://regex-interact-default-rtdb.firebaseio.com/user_study/${progid}/interaction/${$user}/${utterances.length}.json`, {
                    method: "PUT",
                    body: JSON.stringify({
                        "listener_idx": (USER_COMPLETED + $offset) % 3,
                        "response": answer
                    })
                })
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
        if (dev) {
            user.set("dev");
            MAX_ANNOTATION = 10;
            MAX_PROGRAMS = 10;
        }
        else if ($user.length == 0) {
            goto(`${base}/interact/login`)
        }

        let data = await fetch("https://regex-interact-default-rtdb.firebaseio.com/user_study.json")
        .then(response => response.json());

        let completed = new Object();
        let candidates = new Object();
        for (var x in data) {
            if (data[x].hasOwnProperty("interaction")) {
                let completed_interaction = false;
                if (data[x]["interaction"].hasOwnProperty("completed")) {
                    if (data[x]["interaction"]["completed"]) {
                        completed_interaction = true;
                    }
                }

                if (data[x]["interaction"].hasOwnProperty($user) && !completed_interaction) {
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

        if (Object.keys(completed).length > MAX_PROGRAMS) {
            goto(`${base}/interact/finish`)
        }

        if (Object.keys(candidates).length == 0) {
            goto(`${base}/interact/finish`);
        }

        USER_COMPLETED = Object.keys(completed).length;

        let j = getRandomInt(0, Object.keys(candidates).length);
        console.log(j);
        let i = 0
        for (var x in candidates) {
            if (i == j) {
                progid = x;
                regex = candidates[x]["program"];
                console.log(x, candidates[x]);
                console.log(progid, regex);
                let created_record = await fetch(`https://regex-interact-default-rtdb.firebaseio.com/user_study/${progid}/interaction/${$user}/completed.json`, {
                    method: "PUT",
                    body: JSON.stringify(false)
                }).then(response => response.json());
                guess = "";
                guess_correct = false;
                return;
            }
            i += 1;
        }


    }

    onMount(loadRegex);
</script>

<div class="col-lg-10 mx-auto p-3 py-md-5">

    <div class="col-lg-10 pt-md-1 pb-md-1 text-center">
        <h4>Completed {USER_COMPLETED} of {MAX_PROGRAMS} tasks</h4>
    </div>

    <div class="col-lg-10 pt-md-1 pb-md-1 text-center">
        <h2>You are now the describer</h2>
    </div>

    <p>
        Here, you are presented with a regular expression. You need to interact with a system and communicate the regular expression. After each example is provided, a system that is playing the role of a guesser will guess which regular expression you might have been referring to. The game is completed when the system's guess matches the regular expression you were given, or when 10 examples have been provided. If the system produces "null" as a guess, then the system failed to guess the regular expression. You can provide more examples, which might help the system, and if the system fails to guess the regular expression after 10 examples, you can submit the examples you provided and move on to the next task.
    </p>

    {#if USER_COMPLETED % 3 == 0}
        <div>
            <h2>You are now interacting with the <span style="color:green">green</span> robot.</h2>
        </div>
    {:else if USER_COMPLETED % 3 == 1}
        <div>
            <h2>You are now interacting with the <span style="color:blue">blue</span> robot.</h2>
        </div>
    {:else}
        <div>
            <h2>You are now interacting with the <span style="color:red">red</span> robot.</h2>
        </div>
    {/if}

    <div class="col-lg-10 py-md-3">
        <h2>Regex: <tt>{regex}</tt></h2>
    </div>
    
    {#if guess_correct}
        <div class="col-lg-10 py-md-3">
            <h2>System's guess: <tt style="color:green">{guess}</tt></h2>
        </div>
    {:else}
        <div class="col-lg-10 py-md-3">
            <h2>System's guess: <tt style="color:red">{guess}</tt></h2>
        </div>
    {/if}

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

    <div class="col-lg-6 py-md-5">
        <ul class="list-group">
            {#each utterances as utt}
                {#if utt.label == "+"}
                <div class="list-group list-group-horizontal py-md-1">
                    <li class="list-group-item list-group-item flex-fill">{utt.string}</li>
                    <li class="list-group-item list-group-item-primary"><i class="fa-solid fa-plus"></i></li>
                    <li class="list-group-item list-group-item"><i class="fa-solid fa-minus"></i></li>
                </div>
                    <!-- <li class="list-group-item list-group-item-primary">{utt.string}<button class="btn btn-default btn-sm float-end" on:click={() => removeUtterance(utt.id)} ><i class="fa fa-times" /></button></li> -->
                {:else if utt.label == "-"}
                    <div class="list-group list-group-horizontal py-md-1">
                        <li class="list-group-item list-group-item flex-fill">{utt.string}</li>
                        <li class="list-group-item list-group-item"><i class="fa-solid fa-plus"></i></li>
                        <li class="list-group-item list-group-item-danger"><i class="fa-solid fa-minus"></i></li>
                        
                    </div>
                    <!-- <li class="list-group-item list-group-item-danger">{utt.string}<button class="btn btn-default btn-sm float-end" on:click={() => removeUtterance(utt.id)} ><i class="fa fa-times" /></button></li> -->
                {/if}
            {/each}
        </ul>
    </div>

    {#if utterances.length >= 10 || guess_correct}
        <div class="col-lg-6 py-md-5">
            <button class="btn btn-success btn-lg float-end" on:click={submitUtterances}>Submit</button>
        </div>
    {/if}
    <SvelteToast />
</div>
  
<style>
</style>