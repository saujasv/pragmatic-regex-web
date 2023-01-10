<script>
    import { goto } from '$app/navigation';
    import { user } from '$lib/store.js';
    import { onMount } from "svelte";
    import { SvelteToast, toast } from '@zerodevx/svelte-toast';

    let regex = "";
    let current_utterance_string = "";
    let current_utterance_label = 0;

    $: consistent = isConsistent(current_utterance_string, current_utterance_label, regex);

    function isConsistent(string, label, regex) {
        if (label === "+") {
            if (string.match(`^${regex}\$`)) {
                return 1;
            }
            else {
                return -1;
            }
        }
        else if (label === "-") {
            if (string.match(`^${regex}\$`)) {
                return -1;
            }
            else {
                return 1;
            }
        }
        else {
            return 0;
        }
    }

    let id = 0;

    async function loadRegex() {
        if ($user.length == 0) {
            goto("/annotate/login")
        }

        await fetch("https://try-regex-default-rtdb.firebaseio.com/programs.json")
        .then(response => response.json())
        .then(data => {
            let n = data.length;
            regex = data[Math.floor(Math.random() * (n - 1))];
            current_utterance_string = "";
            current_utterance_label = 0;
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
            <span class="fs-4">Tutorial</span>
        </a>
    </header>
    <div class="col-lg-14 py-md-3">
        <div class="row gx-1">
            <div class="col">
                <h3>Regex: <tt>{regex}</tt></h3>
            </div>
            <div class="col">
                <button class="btn btn-outline-dark" on:click={loadRegex}>
                    <i class="fa-solid fa-arrows-rotate"></i>
                </button>
            </div>
        </div>
    </div>
    
    <div class="row gx-1">
        <div class="input-group col">
            <span class="input-group-text">Enter example</span>
            <input type="text" class="form-control" bind:value={current_utterance_string} >
            <input type="radio" class="btn-check" bind:group={current_utterance_label} name="utterance-type" value={"+"} id="positive" autocomplete="off">
            <label class="btn btn-outline-primary" for="positive"><i class="fa-solid fa-plus"></i></label>
            <input type="radio" class="btn-check" bind:group={current_utterance_label} name="utterance-type" value={"-"} id="negative" autocomplete="off">
            <label class="btn btn-outline-danger" for="negative"><i class="fa-solid fa-minus"></i></label>
        </div>

        <div class="col px-2">
            {#if consistent == 0}
                <span style="font-size: 1.5em; color: grey;">
                    <i class="fa-solid fa-square-pen"></i>
                </span>
            {:else if consistent == 1 && current_utterance_string.length > 0}
                <span style="font-size: 1.5em; color: green;">
                    <i class="fa-solid fa-square-check"></i>
                </span>
            {:else}
                <span style="font-size: 1.5em; color: red;">
                    <i class="fa-solid fa-square-xmark"></i>
                </span>
            {/if}
        </div>
    </div>

    <div class="row-gx-1 py-5 float-right">
        <button class="btn btn-primary" on:click={() => goto("/annotate/verify")}>Proceed to task</button>
    </div>

</div>

