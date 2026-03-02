<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import type { ClassNameValue } from 'tailwind-merge';

	interface DividerProps {
		children?: any;
		className?: ClassNameValue;
		vertical?: boolean;
	}

	// destructure $props() using the interface
	let { children, className = '', vertical = false }: DividerProps = $props();
</script>

{#if children}
	<!-- Divider with centered text -->
	<div class="flex w-full items-center">
		<div class={cn('h-px flex-1 border-t border-slate-500', className)}></div>
		<span class="px-3 text-sm whitespace-nowrap text-slate-500">
			{@render children()}
		</span>
		<div class={cn('h-px flex-1 border-t border-slate-500', className)}></div>
	</div>
{:else}
	<!-- Simple divider -->
	<div
		role="separator"
		aria-orientation={vertical ? 'vertical' : 'horizontal'}
		class={cn(vertical ? 'h-full border-l' : 'w-full border-t', 'h-px border-slate-500', className)}
	></div>
{/if}
