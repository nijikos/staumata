<script lang="ts">
	import { Menu, X } from '@lucide/svelte';
	import { slide } from 'svelte/transition';

	type Props = {
		hideIconBG?: boolean;
		data?: any;
	};

	const { hideIconBG, data }: Props = $props();

	let openMenu = $state(false);

	const toggleMenu = () => {
		openMenu = !openMenu;
	};
	const closeMenu = () => {
		openMenu = false;
	};

	const navMenus = [
		{ label: 'features', href: '/' },
		{ label: 'projects', href: '/' },
		{ label: 'products', href: '/' }
	];
</script>

<img
	src="/images/logo/staumata-logo-icon-bg.webp"
	alt="logo-icon-bg"
	class="pointer-events-none absolute -top-32 -left-48 w-120 max-w-none sm:-top-48 sm:-left-48 sm:w-min sm:max-w-full lg:-top-80 lg:-left-80"
	class:hidden={hideIconBG || openMenu}
/>
<nav class="flex h-16 flex-row items-center justify-between gap-4 pl-4 md:pl-8">
	<div>
		<a href="/"
			><img src="/images/logo/staumata-logo.webp" alt="logo-icon-bg" class="w-24 md:w-36" /></a
		>
	</div>
	<div class="hidden flex-row gap-0 md:flex">
		<a
			class="inline-flex items-center bg-primary-800 px-4 py-3 text-sm text-white hover:bg-primary-900 md:px-6 md:py-5 md:text-base"
			href="/about-staumata">What's STAUMATA</a
		>
		<a
			class="inline-flex items-center px-4 py-3 text-sm hover:bg-muted-100 md:px-6 md:py-5 md:text-base"
			target="_blank"
			href={data?.connectHref ?? '/'}>contact {data?.nick ?? 'team'}</a
		>
	</div>

	<!-- ========== MOBILE VIEW BUTTON -->
	<button
		class="grid h-full w-16 place-items-center hover:bg-muted-100 md:hidden"
		onclick={toggleMenu}
	>
		{#if openMenu}
			<X size={20} />
		{:else}
			<Menu size={20} />
		{/if}
	</button>

	<!-- ========== MOBILE MENU -->
	{#if openMenu}
		<div
			class="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col bg-muted-50 text-sm sm:text-lg md:hidden"
			in:slide={{ duration: 500 }}
			out:slide={{ duration: 300 }}
		>
			<div class="flex flex-1 flex-col">
				{#each navMenus as menu}
					<a
						class="px-6 py-5 hover:bg-muted-100 active:bg-muted-100"
						href={menu.href}
						onclick={closeMenu}
					>
						{menu.label}
					</a>
				{/each}
			</div>
			<div class="flex flex-row gap-0 pb-4">
				<a
					class="flex-1 shrink-0 bg-primary-800 px-6 py-4 text-center text-white"
					href="/about-staumata"
				>
					What's STAUMATA
				</a>
				<a
					class="flex-1 shrink-0 px-6 py-4 text-center"
					href={data?.connectHref ?? '/'}
					target="_blank"
					>contact {data?.nick ?? 'team'}
				</a>
			</div>
		</div>
	{/if}
</nav>
