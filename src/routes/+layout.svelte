<script lang="ts">
	import './layout.css';
	import '$lib/styles/scrollbar.scss';
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Staumata</title>
</svelte:head>
{@render children()}
