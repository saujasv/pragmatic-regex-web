<script>
	import { user } from '$lib/store.js';
	import { goto } from '$app/navigation';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import { base } from '$app/paths';
	import { dev } from '$app/environment';

	let username = "";
	function submitUsername() {
		if (username.length > 0) {
			user.set(username);
			goto(`${base}/annotate/tutorial`);
		}
		else {
			toast.push("Please enter a valid username", { 
				theme: {
					'--toastBarHeight': 0,
					'--toastBackground': 'red'
				}
			});
			return;
		}
	}
</script>

<svelte:head>
	<title>Regex from Examples</title>
	<meta name="description" content="Regular expressions from examples" />
</svelte:head>

<div class="col-lg-6 mx-auto p-3 pt-md-5 pb-md-3 text-center">
	<p>
	To track your responses and identify them as coming from the same person, you will submit your responses under a username. To generate the username, visit this <a href="https://www.uuidgenerator.net/version4">UUID generator</a> and generate a Version 4 UUID. You can copy the generated string and paste it into the box below.
	</p>

	<p>
	<b>In addition to entering your username here, please note it down in a place where you can refer to it later.</b> If you have technical issues, the username will allow you to pick up where you left off. We only tie your responses to your username, but we do not have a way to match your username to you (since it is a randomly generated string). We will not be able to tell you what your username is.
	</p>
</div>

<div class="col-lg-6 mx-auto p-3 pt-md-5 pb-md-3 text-center">
	<div class="row gx-1">
        <div class="input-group col">
            <span class="input-group-text">Enter username</span>
            <input type="text" class="form-control" bind:value={username}>
        </div>
        <div class="col">
            <button type="submit" class="btn btn-primary col-auto" on:click={submitUsername}>Proceed to task</button>
        </div>
    </div>

	<SvelteToast />
</div>

<style>
</style>
