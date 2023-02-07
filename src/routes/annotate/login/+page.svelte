<script>
	import { user } from '$lib/store.js';
	import { goto } from '$app/navigation';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import { base } from '$app/paths';

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
