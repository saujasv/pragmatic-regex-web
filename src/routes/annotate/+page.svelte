<script>
	import { goto } from '$app/navigation';
    import { onMount } from 'svelte';

    function goToLogin() {
        goto("/pragmatic-regex-web/annotate/login");
    }

    onMount(goToLogin);
</script>

<svelte:head>
	<title>Regex from Examples</title>
	<meta name="description" content="Regular expressions from examples" />
</svelte:head>

<style>
</style>
