<script>
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { user } from '$lib/store.js';
    import { onMount } from "svelte";
    import { dev } from '$app/environment';
    import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import Guide from '../Guide.svelte';
	// import { comm_game } from '/images/regex-comm-game.svg';

    let regex = "";
    let progid = "";

    let current_utterance_string = "";
    let current_utterance_label = null;

    let utterances = [];
    let n_positive = 0;
    let n_negative = 0;
    let id = 0;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

    function addUtterance() {
        if (current_utterance_string.length > 0) {
            if (current_utterance_label == "+" && current_utterance_string.match(`^${regex}$`)) {
                utterances = [...utterances, {"string": current_utterance_string, "label": current_utterance_label, "id": id}];
                current_utterance_string = "";
                current_utterance_label = null;
                id += 1;
                n_positive += 1;
            }
            else if (current_utterance_label == "-" && !current_utterance_string.match(`^${regex}$`)) {
                utterances = [...utterances, {"string": current_utterance_string, "label": current_utterance_label, "id": id}];
                current_utterance_string = "";
                current_utterance_label = null;
                id += 1;
                n_negative += 1;
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
        for (var x of utterances) {
            if (x.id == id) {
                console.log("id match")
                if (x["label"] == "+") {
                    n_positive--;
                }
                else if (x["label"] == "-") {
                    n_negative -= 1;
                }
            }
        }
        utterances = utterances.filter(utt => utt.id != id);
    }

    async function loadRegex() {
        if (dev) {
            user.set("dev");
        }
        else if ($user.length == 0) {
            goto(`${base}/interact/login`)
        }

        let data = await fetch("https://try-regex-default-rtdb.firebaseio.com/heldout-describe-pilot.json")
        .then(response => response.json());

        let completed = new Object();
        let candidates = new Object();
        for (var x in data) {
            candidates[x] = data[x];
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
    <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a href={base} class="d-flex align-items-center text-dark text-decoration-none">
            <h1>Communication games</h1>
        </a>
    </header>

    <div class="text-center my-5">
        <img src={`${base}/images/regex-comm-game.svg`} alt="" />
    </div>

    <p>
        The task of describing an intended regular expression using examples can be viewed as two-player game. In this game, one player – a <b>describer</b> (in green) – has a particular regular expression in mind. The describer must now communicate this regular expression to a <b>guesser</b> (in yellow) using only examples. The guesser must in turn guess which regular expression the describer might be referring to based only on the examples that the describer provides. The game ends when the guesser guesses the regular expression that the describer has in mind.
    </p>

    <p>
        Some real-world situations can be viewed as instances of this communication game. One example is that of asking for help on an online forum such as StackOverflow. The person asking for help in this case is a describer. They have in mind a program that does something, and describe this in their post. Those who respond can be viewed as guessers. When the guesser successfully identifies a program that does what the describer had in mind, the interaction is said to be successful.
    </p>

    <p>
        In this task, you will assume the role of 
        <!-- either the describer or  -->
        <!-- the guesser. -->
        the describer.
        <!-- , depending on the phase of the task.  -->
        As a describer, you may only use examples to communicate a regular expression you are given. These examples will be shown to a model that will will assume the role of the guesser, and try to identify the regular expression you were trying to communicate. When you are a describer, try to provide examples that you think will be most helpful to the guesser.
        <!-- As a guesser, you will try to identify the regular expression the the describer was trying to communicate. -->
    </p>

    <div class="row-gx-1 py-5 float-right">
        <button class="btn btn-primary" on:click={() => goto(`${base}/interact/examples`)}>Proceed to task</button>
    </div>
</div>

