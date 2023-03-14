<script>
    import {user} from '$lib/store.js';
	import Guide from './Guide.svelte';
    import Modal from './Modal.svelte';

    let showModal = false;
</script>

<nav class="navbar sticky-top navbar-light bg-light justify-content-between">
    <span class="navbar-brand px-3 h1">Regular expressions from examples</span>
    {#if $user.length > 0}
        <span class="navbar-brand px-3">User: <tt>{$user}</tt></span>
    {/if}
    <button class="btn btn-primary px-3 mx-3" on:click={() => (showModal = true)}>Regex cheatsheet</button>
</nav>

<Modal bind:showModal>
    <h2 slot="header">
		Regular Expression Reference
	</h2>
    <Guide />
</Modal>

<slot></slot>