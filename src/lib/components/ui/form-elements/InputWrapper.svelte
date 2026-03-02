<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { Snippet } from 'svelte';
	import type { ClassNameValue } from 'tailwind-merge';
	interface Props {
		children: Snippet;
		className?: ClassNameValue;
		disabled?: boolean;
	}
	let { children, className, disabled }: Props = $props();
</script>

<div
	class={cn(
		'relative flex flex-row items-center gap-2 rounded-md border border-muted-200 px-3  py-2.5 text-base focus-within:ring-2 focus-within:ring-primary-500 has-disabled:bg-muted-50',
		disabled ? 'cursor-not-allowed bg-muted-50' : 'bg-white',
		className
	)}
>
	{@render children()}
</div>
