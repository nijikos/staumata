<script lang="ts">
	import { cn } from '$lib/utils/cn';
	import { Icon } from '@lucide/svelte';
	import type { IconNode } from '@lucide/svelte';
	import type { ClassNameValue } from 'tailwind-merge';

	let {
		name,
		className,
		size = 16,
		strokeWidth = 1.2
	}: {
		name: keyof typeof iconNodes;
		className?: ClassNameValue;
		size?: number;
		strokeWidth?: number;
	} = $props();

	const iconNodes = {
		scale: {
			name: 'scale',
			nodes: [
				['path', { d: 'M12 3v18' }],
				['path', { d: 'm19 8 3 8a5 5 0 0 1-6 0zV7' }],
				['path', { d: 'M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1' }],
				['path', { d: 'm5 8 3 8a5 5 0 0 1-6 0zV7' }],
				['path', { d: 'M7 21h10' }]
			]
		},
		newspaper: {
			name: 'newspaper',
			nodes: [
				['path', { d: 'M15 18h-5' }],
				['path', { d: 'M18 14h-8' }],
				[
					'path',
					{
						d: 'M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2'
					}
				],
				['rect', { width: '8', height: '4', x: '10', y: '6', rx: '1' }]
			]
		},
		cctv: {
			name: 'cctv',
			nodes: [
				[
					'path',
					{ d: 'M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97' }
				],
				[
					'path',
					{
						d: 'M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z'
					}
				],
				['path', { d: 'M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15' }],
				['path', { d: 'M2 21v-4' }],
				['path', { d: 'M7 9h.01' }]
			]
		},
		atom: {
			name: 'atom',
			nodes: [
				['circle', { cx: '12', cy: '12', r: '1' }],
				[
					'path',
					{
						d: 'M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z'
					}
				],
				[
					'path',
					{
						d: 'M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z'
					}
				]
			]
		},
		'audio-lines': {
			name: 'audio-lines',
			nodes: [
				['path', { d: 'M2 10v3' }],
				['path', { d: 'M6 6v11' }],
				['path', { d: 'M10 3v18' }],
				['path', { d: 'M14 8v7' }],
				['path', { d: 'M18 5v13' }],
				['path', { d: 'M22 10v3' }]
			]
		},
		banknote: {
			name: 'banknote',
			nodes: [
				['rect', { width: '20', height: '12', x: '2', y: '6', rx: '2' }],
				['circle', { cx: '12', cy: '12', r: '2' }],
				['path', { d: 'M6 12h.01M18 12h.01' }]
			]
		},
		'book-marked': {
			name: 'book-marked',
			nodes: [
				['path', { d: 'M10 2v8l3-3 3 3V2' }],
				[
					'path',
					{
						d: 'M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20'
					}
				]
			]
		},
		briefcase: {
			name: 'briefcase',
			nodes: [
				['path', { d: 'M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16' }],
				['rect', { width: '20', height: '14', x: '2', y: '6', rx: '2' }]
			]
		},
		'chart-column-big': {
			name: 'chart-column-big',
			nodes: [
				['path', { d: 'M3 3v16a2 2 0 0 0 2 2h16' }],
				['rect', { x: '15', y: '5', width: '4', height: '12', rx: '1' }],
				['rect', { x: '7', y: '8', width: '4', height: '9', rx: '1' }]
			]
		},
		database: {
			name: 'database',
			nodes: [
				['ellipse', { cx: '12', cy: '5', rx: '9', ry: '3' }],
				['path', { d: 'M3 5V19A9 3 0 0 0 21 19V5' }],
				['path', { d: 'M3 12A9 3 0 0 0 21 12' }]
			]
		},
		flower: {
			name: 'flower',
			nodes: [
				['circle', { cx: '12', cy: '12', r: '3' }],
				[
					'path',
					{
						d: 'M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5'
					}
				],
				['path', { d: 'M12 7.5V9' }],
				['path', { d: 'M7.5 12H9' }],
				['path', { d: 'M16.5 12H15' }],
				['path', { d: 'M12 16.5V15' }],
				['path', { d: 'm8 8 1.88 1.88' }],
				['path', { d: 'M14.12 9.88 16 8' }],
				['path', { d: 'm8 16 1.88-1.88' }],
				['path', { d: 'M14.12 14.12 16 16' }]
			]
		},
		package: {
			name: 'package',
			nodes: [
				[
					'path',
					{
						d: 'M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z'
					}
				],
				['path', { d: 'M12 22V12' }],
				['polyline', { points: '3.29 7 12 12 20.71 7' }],
				['path', { d: 'm7.5 4.27 9 5.15' }]
			]
		},
		'pencil-ruler': {
			name: 'pencil-ruler',
			nodes: [
				['path', { d: 'M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13' }],
				['path', { d: 'm8 6 2-2' }],
				['path', { d: 'm18 16 2-2' }],
				['path', { d: 'm17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17' }],
				[
					'path',
					{
						d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'
					}
				],
				['path', { d: 'm15 5 4 4' }]
			]
		}
	};

	export const iconKeys = Object.keys(iconNodes);
	// console.log('iconKeys', iconKeys);
</script>

<Icon
	name={iconNodes[name].name}
	iconNode={iconNodes[name].nodes as IconNode}
	class={cn(className)}
	{size}
	{strokeWidth}
/>
