<script lang="ts">
	import { cn } from '$lib/utils/core.helper';
	import {
		ChartLine,
		ChartNoAxesColumnIncreasing,
		ChartNoAxesCombined,
		HandCoins,
		Handshake,
		Mail,
		Menu,
		MessageCircle,
		MoveRight,
		Package,
		Puzzle,
		Quote,
		ReceiptText,
		Search,
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
		problems: [
			{
				title: 'GENERIC ERP',
				icon: Package,
				description: "You're working on systems that are not built for your workflow"
			},
			{
				title: 'IRRELEVANT MODULES',
				icon: Puzzle,
				description: 'Feature-heavy systems with modules you never needed'
			},
			{
				title: 'STACKED EXPENSE',
				icon: ChartNoAxesCombined,
				description: 'Too many tools. Too many fees. Fragmented Data.'
			},
			{
				title: 'CRM AS STORAGE',
				icon: Warehouse,
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
		],
		features: [
			{
				title: 'OUTBOUND SALES',
				icon: Search,
				tagline: 'More conversations. Less manual work.',
				features: [
					'3–5x more qualified leads sourced monthly',
					'40–70% higher reply rates with AI-personalized outreach',
					'80% reduction in manual prospecting time',
					'Fully automated lead scraping + enrichment'
				]
			},
			{
				title: 'INBOUND SALES',
				icon: MessageCircle,
				tagline: 'No lead left waiting. No revenue leaking.',
				features: [
					'< 60-second automated lead response time',
					'2–3x higher lead-to-meeting conversion',
					'24/7 AI sales agents handling inquiries',
					'Personalized follow-ups across WhatsApp & chat'
				]
			},
			{
				title: 'PROJECT MANAGEMENT',
				icon: ChartNoAxesColumnIncreasing,
				tagline: 'Organized execution. Predictable revenue.',
				features: [
					'100% pipeline transparency across deals',
					'30–50% faster deal cycle tracking',
					'Automated invoicing & task assignment',
					'Real-time budget & performance dashboards'
				]
			}
		],
		projects: [
			{
				img: '/images/projects/project-1b.webp',
				category: 'Automation & AI Solutions',
				title: 'Lead Profiles Scraper & Cold Message Generation',
				description:
					'Effortlessly extract LinkedIn profiles based on your specific lead criteria and automate the creation of high-conversion sales outreach. This system maintains a communication standard by blending data accuracy with human-like personalization.'
			},
			{
				img: '/images/projects/project-2b.webp',
				category: 'Automation & AI Solutions',
				title: 'Custom Sales and Support AI Agents',
				description:
					"Engineer AI agents that strictly adhere to your company's SOPs while integrating with essential tools like Google Calendar and digital product catalogs, bridging the gap between automated efficiency and personalized service to drive higher conversion rates."
			},
			{
				img: '/images/projects/project-3b.webp',
				category: 'Data & Business Intelligence',
				title: 'Strategic Sales Intelligence',
				description:
					'Transform your raw sales data into actionable insights with an AI interface that functions as a personal business consultant. This system accelerates the decision-making process by providing data-driven recommendations in real-time.'
			}
		],
		reviews: [
			{
				testimonial:
					'By automating our LinkedIn prospecting and messaging, we saw a 40% increase in lead response rates within the first month. The personalization engine is so accurate and it save us more time to focus on something else.',
				author: 'Director of Growth',
				industry: 'FinTech Startup'
			},
			{
				testimonial:
					"What used to take our analysts days to compile now takes seconds through the AI consultant interface. We've shaved 15 hours off our weekly reporting cycle. Customizing the workflow to display the SQL query also helps us crosschecking the AI's results.",
				author: 'VP of Sales',
				industry: 'SaaS Enterprise'
			},
			{
				testimonial:
					'Integrating the AI Sales Agent with our product catalog was a game-changer, resulting in a 25% reduction in support tickets and faster booking cycles via Google Calendar. It adheres perfectly to our SOPs, and works 27/4.',
				author: 'Founder',
				industry: 'Mudita Mental Health'
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

	<div class="flex items-center justify-center px-4 py-24">
		<div class="w-full text-primary-800 md:max-w-400">
			<div
				class="pointer-events-none flex flex-col items-start gap-0 select-none md:flex-row md:items-end md:gap-6 lg:justify-start"
			>
				<h2
					class="text-6xl leading-12 font-semibold uppercase md:text-6xl md:leading-16 lg:text-9xl lg:leading-28 xl:leading-32 2xl:text-10xl"
				>
					end-to-end sales
				</h2>
				<p class="w-52 pb-3 text-xs lg:pb-6 lg:text-base 2xl:pb-4">
					Combines intelligent automation with your team's expertise
				</p>
			</div>

			<div
				class="pointer-events-none flex flex-col-reverse items-start justify-end gap-0 select-none md:flex-row md:items-center md:gap-6"
			>
				<div class="text-xs lg:text-base">
					<p class="text-left md:text-right">Most teams don't lack effort.</p>
					<p class="text-left md:text-right">
						They lack infrastructure built around their reality.
					</p>
				</div>
				<h2
					class="text-right text-6xl leading-12 font-semibold uppercase md:text-6xl md:leading-16 lg:text-9xl lg:leading-28 xl:leading-32 2xl:text-10xl"
				>
					driven by ai
				</h2>
			</div>

			<div class="mt-4 flex flex-row items-end justify-end gap-4 md:mt-0">
				<p class="pointer-events-none w-40 text-right text-xs select-none lg:text-base">
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
<!-- ---------- MAIN -->
<main class="">
	<section
		class="my-20 flex w-full flex-col gap-4 px-4 text-primary-800 md:mx-auto md:max-w-480 md:px-8"
	>
		<p
			class="border-b border-primary-800 pb-4 text-3xl font-semibold uppercase md:w-fit md:text-5xl"
		>
			[common] problems
		</p>
		<div class="flex flex-col gap-4 md:flex-row md:flex-wrap">
			{#each main.problems as problem}
				<div
					class="flex flex-row gap-2 border border-muted-400 px-4 py-6 md:w-60 md:flex-col md:gap-18"
				>
					<problem.icon class="size-8 stroke-1" />
					<div class="">
						<p class="text-xl font-semibold md:w-36 md:text-3xl">{problem.title}</p>
						<p class="font-medium">{problem.description}</p>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="my-20 bg-muted-100 py-8 text-primary-800">
		<div class="flex w-full flex-col gap-4 px-4 md:mx-auto md:max-w-480 md:px-8">
			<div class="border-b border-primary-800 pb-4 md:w-fit">
				<p class="text-3xl font-semibold uppercase md:text-5xl">[from] lead generation</p>
				<p class="text-3xl font-semibold uppercase md:text-5xl">[to] follow-up</p>
			</div>
			<div class="flex flex-col gap-2 md:flex-row md:flex-wrap">
				{#each main.solutions as solution}
					<div class="flex flex-row items-center gap-2 border border-primary-800 px-6 py-5">
						<solution.icon class="size-4 stroke-1" />
						<p class="uppercase">{solution.title}</p>
					</div>
				{/each}
			</div>
			<p class="text-sm md:text-base">
				Giving you more time to focus on building relationships and closing deals
			</p>
		</div>
	</section>

	<section
		class="my-20 flex w-full flex-col gap-4 px-4 text-primary-800 md:mx-auto md:max-w-480 md:px-8"
	>
		<div class="border-b border-primary-800 pb-4 md:w-fit">
			<p class="text-3xl font-semibold uppercase md:text-5xl">[features]</p>
			<p class="text-3xl font-semibold uppercase md:text-5xl">all-in-one sales command center</p>
		</div>
		<div>
			<p class="text-sm md:text-base">Growth reveals inefficiencies.</p>
			<p class="text-sm md:text-base">Generic systems amplify them.</p>
			<p class="text-sm md:text-base">
				We design sales infrastructure built around your exact workflow, not someone else's
				template.
			</p>
		</div>
		<div class="flex flex-col gap-8 md:flex-row md:flex-wrap">
			{#each main.features as features}
				<div class="flex flex-col gap-4 border border-primary-800 px-4 py-8 md:w-90">
					<features.icon class="size-6 stroke-2" />
					<p class="text-2xl font-semibold uppercase md:w-48 md:text-5xl">{features.title}</p>
					<p class="font-semibold">{features.tagline}</p>
					<ul>
						{#each features.features as feat}
							<li class="2ist-outside ml-8 list-disc pl-3">{feat}</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
		<button class="button-md md:button-lg contain-primary w-fit shrink-0">
			<span>Book A Meeting</span>
			<MoveRight size={16} />
		</button>
	</section>

	<section class="my-20 flex w-full flex-col gap-4 text-primary-800 md:mx-auto md:max-w-480">
		<div class="px-4 md:px-8">
			<p class="text-3xl font-semibold uppercase md:text-5xl">[projects]</p>
			<p class="text-3xl font-semibold uppercase md:text-5xl">our featured works</p>
		</div>
		<div class=" flex flex-col gap-0">
			{#each main.projects as project, i}
				<div class={`flex flex-col md:grid md:grid-cols-2 md:items-stretch`}>
					<img
						class={cn(
							'h-40 object-cover md:col-span-1 md:h-auto md:w-full',
							i % 2 === 0 ? 'md:order-2' : 'md:order-1'
						)}
						alt="project thumnail"
						src={project.img}
					/>
					<div
						class={cn(
							'flex flex-col gap-4 bg-white px-4 py-5 md:col-span-1 md:px-8 md:py-9',
							i % 2 === 0 ? 'md:order-1' : 'md:order-2'
						)}
					>
						<p class="w-fit border border-muted-400 px-4 py-3">{project.category}</p>
						<p class="text-2xl font-semibold uppercase md:text-3xl">{project.title}</p>
						<p class="font-light">{project.description}</p>
						<a href="/" class="link-primary">see more</a>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section
		class="my-20 flex w-full flex-col gap-4 px-4 text-primary-800 md:mx-auto md:max-w-480 md:px-8"
	>
		<div class="">
			<p class="text-3xl font-semibold uppercase md:text-5xl">[reviews]</p>
			<p class="text-3xl font-semibold uppercase md:text-5xl">what our clients say</p>
		</div>
		<div class="flex flex-col gap-12 border-t border-b border-primary-800 py-10 md:flex-row">
			{#each main.reviews as review}
				<div class="flex flex-col gap-4">
					<div class="flex flex-row gap-2">
						<p class="flex-1 shrink-0">{review.testimonial}</p>
						<Quote class="size-12 stroke-[0.5px]" />
					</div>
					<p class="w-fit rounded-bl-xl bg-primary-800 px-5 py-3 text-white">
						{review.author}, {review.industry}
					</p>
				</div>
			{/each}
		</div>
		<button class="button-md md:button-lg contain-primary w-fit shrink-0">
			<span>Book A Meeting</span>
			<MoveRight size={16} />
		</button>
	</section>
</main>
<!-- ---------- FOOTER -->
<footer
	class="flex flex-col gap-8 bg-primary-900 px-8 py-14 text-white md:flex-row md:items-start md:justify-between"
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
