<script lang="ts">
	import './layout.css';
	import '$lib/styles/scrollbar.scss';
	import favicon from '$lib/assets/favicon.ico';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Staumata</title>
	<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
</svelte:head>
{@render children()}
