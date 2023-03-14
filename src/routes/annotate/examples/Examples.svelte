<script>
    import { goto } from '$app/navigation';
    import { user } from '$lib/store.js';
    import { onMount } from "svelte";
    import { base } from '$app/paths';
    import { SvelteToast, toast } from '@zerodevx/svelte-toast';

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    let num_completed = 0;

    let events_log = [];

    let MAX_ANNOTATION = 1;
    let MAX_PROGRAMS = 3;

    let regex = "";
    let progid = "";

    let current_utterance_string = "";
    let current_utterance_label = null;

    let utterances = [];

    let id = 0;

    function addUtterance() {
        events_log = [...events_log, {"string": current_utterance_string, "label": current_utterance_label, "id": id}]
        if (current_utterance_string.length > 0) {
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
                toast.push("Label not provided", { 
                    theme: {
                        '--toastBarHeight': 0,
                        '--toastBackground': 'red'
                    }
                });
                return;
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
    }

    function removeUtterance(id) {
        utterances = utterances.filter(utt => utt.id != id);
    }

    async function submitUtterances() {
        console.log(progid);
        await fetch(`https://try-regex-default-rtdb.firebaseio.com/heldout-describe-pilot/${progid}/descriptions/${$user}.json`, {
            method: "PUT",
            body: JSON.stringify(utterances)
        })
        utterances = [];

        await loadRegex().then(response => {});
    }

    async function loadRegex() {
        if ($user.length == 0) {
            goto(`${base}/annotate/login`)
        }

        let data = await fetch("https://try-regex-default-rtdb.firebaseio.com/heldout-describe-pilot.json")
        .then(response => response.json());

        let completed = new Object();
        let candidates = new Object();
        for (var x in data) {
            if (data[x].hasOwnProperty("descriptions")) {
                if (data[x]["descriptions"].hasOwnProperty($user)) {
                    completed[x] = data[x];
                }
                if (Object.keys(data[x]["descriptions"]).length < MAX_ANNOTATION) {
                    candidates[x] = data[x];
                }
            }
            else {
                candidates[x] = data[x];
            }
        }

        if (Object.keys(completed).length > MAX_PROGRAMS) {
            goto(`${base}/annotate/finish`)
        }

        if (Object.keys(candidates).length == 0) {
            goto(`${base}/annotate/finish`);
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
                return;
            }
            i += 1;
        }
    }

    onMount(loadRegex);
</script>

<div class="col-lg-10 mx-auto p-3 py-md-5">
    <p>
        Here, you are presented with a regular expression. You need to provide a set of examples that <em>describes</em> this regular expression to another person. In the context of this task, a good description is a set of examples that you might provide if you were asking for help on a forum such as StackOverflow. A good set of examples will allow a helpful person to easily identify the program you intend (here, the program that you are given) without knowing the program beforehand.
    </p>

    <div class="col-lg-10 py-md-3">
        <h2>Regex: <tt>{regex}</tt></h2>
    </div>

    <div class="row gx-1">
        <div class="input-group col">
            <span class="input-group-text">Enter example</span>
            <input type="text" class="form-control" bind:value={current_utterance_string} >
            <input type="radio" class="btn-check" bind:group={current_utterance_label} name="utterance-type" value={"+"} id="positive" autocomplete="off">
            <label class="btn btn-outline-primary" for="positive">+</label>
            <input type="radio" class="btn-check" bind:group={current_utterance_label} name="utterance-type" value={"-"} id="negative" autocomplete="off">
            <label class="btn btn-outline-danger" for="negative">-</label>
        </div>
        <div class="col">
            <button type="submit" class="btn btn-primary col-auto" on:click={addUtterance}>Add</button>
        </div>
    </div>

    <div class="col-lg-6 py-md-5">
        <ul class="list-group">
            {#each utterances as utt}
                {#if utt.label == "+"}
                    <li class="list-group-item list-group-item-primary">{utt.string}<button class="btn btn-default btn-sm float-end" on:click={() => removeUtterance(utt.id)} ><i class="fa fa-times" /></button></li>
                {:else if utt.label == "-"}
                    <li class="list-group-item list-group-item-danger">{utt.string}<button class="btn btn-default btn-sm float-end" on:click={() => removeUtterance(utt.id)} ><i class="fa fa-times" /></button></li>
                {/if}
            {/each}
        </ul>
    </div>

    <div class="col-lg-6 py-md-5">
        <button class="btn btn-success btn-lg float-end" on:click={submitUtterances}>Submit</button>
    </div>

    <SvelteToast />
</div>
  
<style>
</style>