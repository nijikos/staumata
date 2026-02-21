<script lang="ts">
	import {
		ChartLine,
		ChartNoAxesCombined,
		HandCoins,
		Handshake,
		Mail,
		Menu,
		MoveRight,
		Package,
		Puzzle,
		ReceiptText,
		SquareKanban,
		Warehouse,
		X
	} from '@lucide/svelte';
	import { slide, fade } from 'svelte/transition';

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

	const main = {
		issues: [
			{
				icon: Package,
				title: 'GENERIC ERP',
				description: "You're working on systems that are not built for your workflow"
			},
			{
				icon: Puzzle,
				title: 'IRRELEVANT MODULES',
				description: 'Feature-heavy systems with modules you never needed'
			},
			{
				icon: ChartNoAxesCombined,
				title: 'STACKED EXPENSE',
				description: 'Too many tools. Too many fees. Fragmented Data.'
			},
			{
				icon: Warehouse,
				title: 'CRM AS STORAGE',
				description: 'Your CRM only act as storage, not intelligence.'
			}
		],
		solutions: [
			{
				title: 'LEAD GENERATION',
				icon: Handshake
			},
			{
				title: 'COLD MESSAGE',
				icon: Mail
			},
			{
				title: 'COST TRACKING',
				icon: HandCoins
			},
			{
				title: 'PROJECT MANAGEMENT',
				icon: SquareKanban
			},
			{
				title: 'SALES CHAT AGENT',
				icon: ReceiptText
			},
			{
				title: 'ANALYTICS',
				icon: ChartLine
			}
		]
	};

	const footer = {
		contact: {
			WhatsApp: '0812 3456 7890',
			Base: 'Jakarta, Indonesia'
		},
		links: [
			{ label: 'About Us', href: '/' },
			{ label: 'Lead Generation', href: '/' },
			{ label: 'Outbound Sales Message', href: '/' },
			{ label: 'Lead Tracker', href: '/' },
			{ label: 'Project Management', href: '/' },
			{ label: 'Inbound AI Chat Agent', href: '/' }
		]
	};
</script>

<!-- ---------- HERO -->
<header class="text-primary-900">
	<img
		src="/images/logo/staumata-logo-icon-bg.webp"
		alt="logo-icon-bg"
		class="pointer-events-none absolute -top-32 -left-48 w-120 max-w-none sm:-top-48 sm:-left-48 sm:w-min sm:max-w-full lg:-top-80 lg:-left-80"
		class:hidden={openMenu}
	/>
	<nav class="flex h-16 flex-row items-center justify-between gap-4 pl-4 md:pl-0">
		<div class="hidden flex-row gap-0 md:flex">
			{#each navMenus as menu}
				<a class="inline-flex items-center px-6 py-5 hover:bg-muted-100" href={menu.href}
					>{menu.label}</a
				>
			{/each}
		</div>
		<div>
			<a href="/"
				><img src="/images/logo/staumata-logo.webp" alt="logo-icon-bg" class="w-24 md:w-36" /></a
			>
		</div>
		<div class="hidden flex-row gap-0 md:flex">
			<a
				class="inline-flex items-center bg-primary-800 px-4 py-3 text-sm text-white hover:bg-primary-900 md:px-6 md:py-5 md:text-base"
				href="/">learn more</a
			>
			<a
				class="inline-flex items-center px-4 py-3 text-sm hover:bg-muted-100 md:px-6 md:py-5 md:text-base"
				href="/">request demo</a
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
					<a class="flex-1 shrink-0 bg-primary-800 px-6 py-4 text-center text-white" href="/">
						Learn More
					</a>
					<a class="flex-1 shrink-0 px-6 py-4 text-center" href="/"> Request Demo </a>
				</div>
			</div>
		{/if}
	</nav>

	<div class="flex items-center justify-center px-4 pt-24 pb-36">
		<div class="w-full max-w-400">
			<div
				class="flex flex-col items-start gap-0 md:flex-row md:items-end md:gap-6 lg:justify-start"
			>
				<h2
					class="text-5xl leading-12 font-semibold uppercase md:text-6xl md:leading-16 lg:text-8xl lg:leading-28 2xl:text-9xl"
				>
					end-to-end sales
				</h2>
				<p class="w-52 pb-3 text-xs lg:pb-6 lg:text-base 2xl:pb-4">
					Combines intelligent automation with your team's expertise
				</p>
			</div>

			<div
				class="flex flex-col-reverse items-start justify-end gap-0 md:flex-row md:items-center md:gap-6"
			>
				<div class="text-xs lg:text-base">
					<p class="text-left md:text-right">Most teams don't lack effort.</p>
					<p class="text-left md:text-right">
						They lack infrastructure built around their reality.
					</p>
				</div>
				<h2
					class="text-right text-5xl leading-12 font-semibold uppercase md:text-6xl md:leading-16 lg:text-8xl lg:leading-28 2xl:text-9xl"
				>
					driven by ai
				</h2>
			</div>

			<div class="mt-4 flex flex-row items-end justify-end gap-4 md:mt-0">
				<p class="w-40 text-right text-xs lg:text-base">
					No more chasing leads. Start closing deals.
				</p>
				<button class="button-md md:button-lg contain-primary shrink-0">
					<span>Book A Meeting</span>
					<MoveRight size={16} />
				</button>
			</div>
		</div>
	</div>
</header>
<main></main>
<!-- ---------- FOOTER -->
<footer
	class="absolute right-0 bottom-0 left-0 flex flex-col gap-8 bg-primary-800 px-8 py-14 text-white md:flex-row md:items-start md:justify-between"
>
	<div class="">
		<div class="mb-8">
			<p class="text-2xl font-semibold uppercase">contact us</p>
			<p class="">WHATSAPP : 0812 3456 7890</p>
			<p class="">BASE : Jakarta, Indonesia</p>
		</div>
		<div class=""></div>
	</div>
	<div class="flex flex-col gap-4 md:items-end">
		<img src="/images/logo/staumata-logo-white.webp" alt="logo-icon-bg" class="w-36" />
		{#each footer.links as link}
			<a href={link.href} class="underline-offset-4 hover:underline active:underline"
				>{link.label}</a
			>
		{/each}
	</div>
</footer>
