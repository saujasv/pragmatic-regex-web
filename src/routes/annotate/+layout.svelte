<script>
    import {user} from '$lib/store.js';
</script>

<nav class="navbar sticky-top navbar-light bg-light justify-content-between">
    <span class="navbar-brand px-3 h1">Regular expressions from examples</span>
    {#if $user.length > 0}
        <span class="navbar-brand px-3">User: <tt>{$user}</tt></span>
    {/if}
</nav>

<slot></slot>