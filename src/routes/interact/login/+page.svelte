<script>
	import { user, offset } from '$lib/store.js';
	import { goto } from '$app/navigation';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import { base } from '$app/paths';

	function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
    }

	let username = "";
	async function submitUsername() {
		if (username.length > 0) {
			user.set(username);
			let data = await fetch(`https://regex-interact-default-rtdb.firebaseio.com/users/${$user}.json`).then(response => response.json());
			if (data) {
				console.log(`Data found for user`);
				console.log(data);
			}
			else {
				offset.set(1); // hardcoding this for a bit/ getRandomInt(0, 3));
				await fetch(`https://regex-interact-default-rtdb.firebaseio.com/users/${$user}.json`, {
					method: "PUT",
					body: JSON.stringify({
						"offset": $offset
					})
				});
			}
			goto(`${base}/interact/tutorial`);
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
	To track your responses and identify them as coming from the same person, you will submit your responses under a username. To generate the username, visit this <a target="_blank" rel="noopener noreferrer" href="https://www.uuidgenerator.net/version4">UUID generator</a> and generate a Version 4 UUID. You can copy the generated string and paste it into the box below.
	</p>

	<p>
	<b>In addition to entering your username here, please note it down in a place where you can refer to it later.</b> If you would like to do the task across multiple sittings or have technical issues, the username will allow you to pick up where you left off. We only tie your responses to your username, but we do not have a way to match your username to you (since it is a randomly generated string). We will not be able to tell you what your username is.
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
