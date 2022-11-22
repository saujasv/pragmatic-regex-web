<script>
    import { onMount } from "svelte";

    export let user;

    let num_completed = 0;

    let regex = "";

    let current_utterance_string = "";
    let current_utterance_label = null;

    let utterances = [];

    let id = 0;

    function addUtterance() {
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
        }
        
    }

    function removeUtterance(id) {
        utterances = utterances.filter(utt => utt.id != id);
    }

    async function submitUtterances() {
        await fetch(`https://try-regex-default-rtdb.firebaseio.com/collect/${user}.json`, {
            method: "PUT",
            body: JSON.stringify({
                [`round-${num_completed}`]: utterances
            })
        })
        utterances = [];
        num_completed += 1;

        await loadRegex().then(response => {});
    }

    async function loadRegex() {
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
    <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
            <span class="fs-4">Regular expressions from examples</span>
        </a>
        </header>
    
    <div class="col-lg-10 py-md-3">
        <h2>Regex: <tt>{regex}</tt></h2>
    </div>

    <div class="row gx-1">
        <div class="input-group col">
            <span class="input-group-text">Enter example</span>
            <input type="text" class="form-control" bind:value={current_utterance_string} >
            <input type="radio" class="btn-check" bind:group={current_utterance_label} name="utterance-type" value={"+"} id="positive" autocomplete="off">
            <label class="btn btn-outline-success" for="positive">+</label>
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
                    <li class="list-group-item list-group-item-success">{utt.string}<button class="btn btn-default btn-sm float-end" on:click={() => removeUtterance(utt.id)} ><i class="fa fa-times" /></button></li>
                {:else if utt.label == "-"}
                    <li class="list-group-item list-group-item-danger">{utt.string}<button class="btn btn-default btn-sm float-end" on:click={() => removeUtterance(utt.id)} ><i class="fa fa-times" /></button></li>
                {/if}
            {/each}
        </ul>
    </div>

    <div class="col-lg-6 py-md-5">
        <button class="btn btn-success btn-lg float-end" href="/finish" on:click={submitUtterances}>Submit</button>
    </div>
</div>
  
<style>
</style>