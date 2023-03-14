<script>
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { user } from '$lib/store.js';
    import { onMount } from "svelte";
    import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import Guide from '../Guide.svelte';

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
            goto(`${base}/annotate/login`)
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

    function clearExample() {
        current_utterance_string = "";
        current_utterance_label = 0;
    }

    onMount(loadRegex);
</script>

<div class="col-lg-10 mx-auto p-3 py-md-5">
    <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a href={base} class="d-flex align-items-center text-dark text-decoration-none">
            <h1>Tutorial</h1>
        </a>
    </header>

    <p>
        A <b>regular expression</b> is an expression that represents a <em>regular language</em>. A <em>language</em> in this context is a set of strings, and a <em>regular</em> language is a specific type of language (the distinction is not critical for the task). Another way to view a regular language is as a <em>function</em> that assigns a label to every possible string that indicates whether or not the string belongs to that language. A regular expression is a way of specifying a regular language that allows us to create more complex languages by combining simpler languages in specific ways.
    </p>

    <p>
        There are multiple variants of regular expression syntax, each of which allows for a different set of operations. Here, we provide a short tutorial to the regular expressions syntax that you will need to complete this task. You can read about the various constructs you will see as you perform the task along with examples. At the end of the page, you can also try out providing examples and seeing whether they are consistent to get a sense for how the task works. At any point during the task, if you'd like to refer to these instructions, you can click on the <button class="btn btn-primary">Regex cheatsheet</button> button on the top right corner of the screen to review the instructions. When you have read the tutorial, tried out a few examples, and feel comfortable with the setting, click on the <button class="btn btn-primary">Proceed to task</button> button at the end of the page to move on to the next stage of the task.
    </p>

    <Guide />

    <hr />

    <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a href={base} class="d-flex align-items-center text-dark text-decoration-none">
            <h1>Try it out!</h1>
        </a>
    </header>

    <p>
        Here, you have a regular expression, and a space to enter an example. Each example is a string, and its corresponding label. The string is a sequence of characters (entered in the text box), and the label is binary value that indicates whether the string is a positive example (belonging to the regular language specified by the regular expression, indicated with <button class="btn btn-primary"><i class="fa-solid fa-plus"></i></button>), or a negative example (not belonging to the regular language specified by the expression, indicated with <button class="btn btn-danger"><i class="fa-solid fa-minus"></i></button>). An incomplete example is indicated by the <span style="font-size: 1.5em; color: grey;"><i class="fa-solid fa-square-pen"></i></span> icon. A <b>consistent</b> example (where the label is correct for that string) is indicated with the <span style="font-size: 1.5em; color: green;"><i class="fa-solid fa-square-check"></i></span> icon. An <b>inconsistent</b> example (where the label is incorrect for that string) is indicated with the <span style="font-size: 1.5em; color: red;"><i class="fa-solid fa-square-xmark"></i></span> icon. You will only need to provide consistent examples in the task you perform.
    </p>

    <p>
        Use the refresh button (<i class="fa-solid fa-arrows-rotate"></i>) to load a different regular expression. You can also <button class="btn btn-outline-dark" on:click={clearExample}>Clear</button> the example.
    </p>

    <div class="col-lg-14 py-md-3">
        <div class="row gx-1">
            <div class="col">
                <h3>Regex: <tt>{regex}</tt></h3>
            </div>
            <div class="col">
                <button class="btn btn-outline-dark" on:click={loadRegex}>
                    <i class="fa-solid fa-arrows-rotate"></i>
                </button>
                <button class="btn btn-outline-dark" on:click={clearExample}>
                    Clear
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
        <button class="btn btn-primary" on:click={() => goto(`${base}/annotate/verify`)}>Proceed to task</button>
    </div>

</div>

