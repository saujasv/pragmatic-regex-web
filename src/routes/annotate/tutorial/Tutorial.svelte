<script>
    import { goto } from '$app/navigation';
    import { base } from '$app/paths';
    import { user } from '$lib/store.js';
    import { onMount } from "svelte";
    import { dev } from '$app/environment';
    import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import Guide from '../Guide.svelte';

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
            goto(`${base}/annotate/login`)
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
            <h1>Tutorial</h1>
        </a>
    </header>

    <p>
        In programming, we are often faced with the task of recognizing whether a string takes a particular form. For example, given a string that a user provides, a web programmer might want to determine whether it is a phone number. In this situation, the programmer implicitly has a set of strings in mind that are phone numbers. It is difficult to represent this set of strings by listing every member in that set (there may be millions, or billions, or even an infinite number). Instead, they may have a certain template in mind, which they use to describe the phone number, and strings that match this template as accepted, and those that do not match are rejected.
    </p>

    <p>
        <b>Regular expressions</b> are a kind of program that is useful in these situations. These expressions can be seen as functions that implicitly define a set of strings. This function takes a string and determines a boolean value that says whether the string belongs to the set. A regular expression is a way of specifying a this set of strings that allows us to create more complex sets by combining simpler sets in specific ways.
    </p>

    <p>
        In this task, we will look at the problem of finding a regular expression when given a set of examples of strings in, or not in, the set of strings defined by the regular expression. Thinking of the regular expression as a function, we can view this as finding a regular expression given examples of inputs and outputs of this function.
    </p>

    <!-- <p>
        A <b>regular expression</b> is an expression that represents a specific type of <em>language</em>. A <em>language</em> in this context is a set of strings. One way to view a regular language is as a <em>function</em> that assigns a label to every possible string that indicates whether or not the string belongs to that language. A regular expression is a way of specifying a language that allows us to create more complex languages by combining simpler languages in specific ways.
    </p> -->

    <h2>Regular expression syntax</h2>
    <p>
        There are multiple variants of regular expression syntax, each of which allows for a different set of operations. Here, we provide a short tutorial to the regular expressions syntax that you will need to complete this task. You can read about the various constructs you will see as you perform the task along with examples.  At any point during the task, if you'd like to refer to these instructions, you can click on the <button class="btn btn-sm btn-primary">Regex cheatsheet</button> button on the top right corner of the screen to review the instructions. When you have read the tutorial, and feel comfortable with the setting, you can take a small quiz at the end of the page to move on to the next stage of the task.
    </p>
    <!-- At the end of the page, you can also try out providing examples and seeing whether they are consistent to get a sense for how the task works. -->

    <!-- <Guide /> -->

    <p>
        The most basic type of regular expressions are single characters. Each character is a regular expression that represents the singleton set of strings containing just that character. 
    </p>
    <ul>
        <li><tt>a</tt> is a regular expression that represents the singleton set of strings <tt>&lbrace; "a" &rbrace;</tt></li>
    </ul>

    <p>
        You can also specify a regular expression that matches one of a set of single characters using the <tt>[]</tt> operator.
    </p>
    <ul>
        <li><tt>[apx2]</tt> represents the set of strings <tt>&lbrace; "a", "p", "x", "2" &rbrace;</tt></li>
    </ul>

    <p>
        Some frequently used groups of single characters are designated special syntax, and match any single character strings
    </p>
    <ul>
        <li><tt>[a-z]</tt> represents the set of all lowercase characters <tt>&lbrace; "a", "b", "c", ..., "z" &rbrace;</tt></li>
        <li><tt>[A-Z]</tt> represents the set of all uppercase characters <tt>&lbrace; "A", "B", "C", ..., "Z" &rbrace;</tt></li>
        <li><tt>[0-9]</tt> represents the set of all digits <tt>&lbrace; "0", "1", ..., "9" &rbrace;</tt></li>
        <li>The union of these sets can be descibed by writing both within <tt>[]</tt>
            <ul>
                <li><tt>[a-zA-Z]</tt> represents the union of the sets descibed by <tt>[a-z]</tt> and <tt>[A-Z]</tt></li>
                <li><tt>[a-z0-9]</tt> represents the union of the sets descibed by <tt>[a-z]</tt> and <tt>[0-9]</tt></li>
            </ul>
        </li>
        <li><tt>.</tt> represents the set of all single characters</li>
        <li><tt>[^]</tt> is used to represent <em>negated</em> unions. That refers to all single characters except those listed.
        <ul>
            <li><tt>[^ad]</tt> refers to all single characters except <tt>a</tt> and <tt>d</tt></li>li
            <li>The special notation for groups can be used here as well. <tt>[^a-z]</tt> refers to any single character except lowercase letters</li>
        </ul>
    </ul>

    <p>
        So far we have seen examples of regular expressions that match single-character strings. Regular expressions matching multi-character strings can be formed using the <em>concatenation</em> operation, which involves writing the two regular expressions in order. Here, if we have two regular expressions <em><tt>A</tt></em> and <em><tt>B</tt></em>, <tt>(<em>A</em>)(<em>B</em>)</tt> represets their concatenation. We can also concatenate more than two regular expressions like in <tt>(<em>A</em>)(<em>B</em>)(<em>C</em>)</tt>. Note that <em><tt>A</tt></em>, <em><tt>B</tt></em>, <em><tt>C</tt></em>, etc. (in italicized font) can be any regular expressions, including the simple ones described above, and the more complex ones described below.
    </p>
    <ul>
        <li><tt>([a-z])(,)([0-9])</tt> represents the set of strings where a lowercase character is followed by a comma, and then a single digit – <tt>&lbrace; "a,0", "a,1", ..., "z,9" &rbrace;</tt>. Here, the grouping of characters is unambigouous, so we can write the regular expression without parentheses as <tt>[a-z],[0-9]</tt>.</li>
    </ul>

    <p>
        We can describe unions of multi-character regular expressions <tt><em>A</em></tt> and <tt><em>B</em></tt> using <tt>(<em>A</em>|<em>B</em>)</tt>. 
    </p>
    <ul>
        <li><tt>([a-z],|[A-Z];)</tt> represents either a lowercase letter followed by a comma, or an uppercase character followed by a semi-colon. The strings <tt>"a,"</tt> and <tt>"H;"</tt> belong to this set, while <tt>"A,"</tt> and <tt>"a;"</tt> do not.</li>
    </ul>

    <p>
        We can describe repetitions of regular expressions using special syntax. <tt>(<em>A</em>)&lbrace;<em>n</em>,<em>m</em>&rbrace;</tt> represents between <tt><em>n</em></tt> and <tt><em>m</em></tt> consecutive occurrences of <tt><em>A</em></tt>.
    </p>
    <ul>
        <li><tt>([a-z],)&lbrace;2,4&rbrace;</tt> represents the between two and four consecutive occurences of a lowercase letter followed by a comma. The strings <tt>"a,b,"</tt> and <tt>"a,b,p,e,"</tt> belong to this set, while <tt>"a,"</tt> and <tt>"a,b,p,e,x"</tt> do not. Note that we used parentheses to indicate grouping here. If we had instead written the regular expression as <tt>[a-z],&lbrace;2,4&rbrace;</tt>, only the comma would be repeated between two to four times.</li>
    </ul>

    <p>
        Some frequently used cases of repetition have special syntax.
    </p>
    <ul>
        <li>
            <tt>(<em>A</em>)?</tt> is the case of <tt><em>n</em> = 0</tt> and <tt><em>m</em> = 1</tt>. 
            <ul>
                <li><tt>([a-z],)?</tt> represents the between zero and one occurences of a lowercase letter followed by a comma. The empty string <tt>""</tt> and <tt>"a,"</tt> belong to this set, while <tt>"a,b,"</tt> and <tt>"a,b,p,e,x"</tt> do not.</li>
            </ul>
        </li>
        <li>
            <tt>(<em>A</em>)*</tt> is the case of <tt><em>n</em> = 0</tt> and <tt><em>m</em></tt> is unbounded. 
            <ul>
                <li><tt>([a-z],)?</tt> represents the between zero or more occurences of a lowercase letter followed by a comma. The empty string <tt>""</tt> and <tt>"a,b,b,"</tt> belong to this set, while <tt>"a,b"</tt> and <tt>"a,b,p"</tt> do not.</li>
            </ul>
        </li>
        <li>
            <tt>(<em>A</em>)+</tt> is the case of <tt><em>n</em> = 1</tt> and <tt><em>m</em></tt> is unbounded. 
            <ul>
                <li><tt>([a-z],)?</tt> represents the between one or more occurences of a lowercase letter followed by a comma.<tt>"a,"</tt> and <tt>"a,b,b,"</tt> belong to this set, while <tt>"a,b"</tt> and <tt>""</tt> do not.</li>
            </ul>
        </li>
    </ul>

    <p>
    Sometimes, we want to our regular expressions to include characters used to represent operators or other symbols that have significance in the syntax for regexes. In this case, we use the <tt>\</tt> symbol to "escape" the following character – treat it as a character and not as an operator.
    </p>
    <ul>
        <li>The string <tt>"[A-Z]"</tt> is consistent with the regular expression <tt>\[A\-Z\]</tt> but not consistent with <tt>[A-Z]</tt>.</li>
    </ul>

    <h2>Match and correctness</h2>
    <p>
        We have described sets of strings corresponding to regular expressions above. A string is said to <b>match</b> a regular expression if the string belongs to the set of expressions that the regular expression defines. However, when describing a regular expression in terms of which strings it matches, it is often useful to use negative examples – strings that should <em>not</em> be in the set of the desired regular expression.
    </p>
    
    <p>
        To allow for this, we consider an example to be both a string, and a label that says whether the string should match the regular expression. Given a particular <b>string</b>, they assign a <b>label</b> <button class="btn btn-sm btn-primary"><i class="fa-solid fa-plus"></i></button> if the string belongs to the set, and the label <button class="btn btn-sm btn-danger"><i class="fa-solid fa-minus"></i></button> if the string does not belong to the set. The <em>correctness</em> of an example is determined by whether the label is correct for a given string and regular expression. As part of this task, you may provide strings that have either label (<button class="btn btn-sm btn-primary"><i class="fa-solid fa-plus"></i></button> or <button class="btn btn-sm btn-danger"><i class="fa-solid fa-minus"></i></button>) – string that either match or do not match the regular expression – but the examples must be correct.
    </p>

    <p>A <b>specification</b> is a set of examples, where all the examples are correct for the intended regular expression.</p>

    <hr />

    <header class="d-flex align-items-center pb-3 mb-5 border-bottom">
        <a href={base} class="d-flex align-items-center text-dark text-decoration-none">
            <h1>Quiz!</h1>
        </a>
    </header>

    <p>
        Here, you have a regular expression, and a space to enter an example. Each example is a string, and its corresponding label. The string is entered in the text box, and the label is binary value indicated using the appropriate button. To proceed to the next stage, create a specification that has <b>at least 3</b> examples with the <button class="btn btn-sm btn-primary"><i class="fa-solid fa-plus"></i></button> label and <b>at least 3</b> examples with the <button class="btn btn-sm btn-danger"><i class="fa-solid fa-minus"></i></button> label. You can create a specification by entering one example at a time.
        
        <!-- An incomplete example is indicated by the <span style="font-size: 1.5em; color: grey;"><i class="fa-solid fa-square-pen"></i></span> icon. A <b>consistent</b> example (where the label is correct for that string) is indicated with the <span style="font-size: 1.5em; color: green;"><i class="fa-solid fa-square-check"></i></span> icon. An <b>inconsistent</b> example (where the label is incorrect for that string) is indicated with the <span style="font-size: 1.5em; color: red;"><i class="fa-solid fa-square-xmark"></i></span> icon. You will only need to provide consistent examples in the task you perform. -->
    </p>

    <div class="col-lg-10 py-md-3">
        <h2>Regex: <tt>{regex}</tt></h2>
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
                    <li class="list-group-item list-group-item"><button class="btn btn-default btn-sm px-0 py-0" on:click={() => removeUtterance(utt.id)} ><i class="fa fa-times" /></button></li>
                </div>
                    <!-- <li class="list-group-item list-group-item-primary">{utt.string}<button class="btn btn-default btn-sm float-end" on:click={() => removeUtterance(utt.id)} ><i class="fa fa-times" /></button></li> -->
                {:else if utt.label == "-"}
                    <div class="list-group list-group-horizontal py-md-1">
                        <li class="list-group-item list-group-item flex-fill">{utt.string}</li>
                        <li class="list-group-item list-group-item"><i class="fa-solid fa-plus"></i></li>
                        <li class="list-group-item list-group-item-danger"><i class="fa-solid fa-minus"></i></li>
                        <li class="list-group-item list-group-item"><button class="btn btn-default btn-sm px-0 py-0" on:click={() => removeUtterance(utt.id)} ><i class="fa fa-times" /></button></li>
                        
                    </div>
                    <!-- <li class="list-group-item list-group-item-danger">{utt.string}<button class="btn btn-default btn-sm float-end" on:click={() => removeUtterance(utt.id)} ><i class="fa fa-times" /></button></li> -->
                {/if}
            {/each}
        </ul>
    </div>

    <!-- <p>
        Use the refresh button (<i class="fa-solid fa-arrows-rotate"></i>) to load a different regular expression. You can also <button class="btn btn-outline-dark" on:click={clearExample}>Clear</button> the example.
    </p> -->

    <!-- <div class="col-lg-14 py-md-3">
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
    </div> -->

    {#if (n_positive >= 3 && n_negative >= 3) || dev}
        <div class="row-gx-1 py-5 float-right">
            <button class="btn btn-primary" on:click={() => goto(`${base}/annotate/comm-game`)}>Proceed to next stage</button>
        </div>
    {/if}

</div>

