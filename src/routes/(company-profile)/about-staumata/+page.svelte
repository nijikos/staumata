<script lang="ts">
	import Footer from '$lib/components/company-profile/Footer.svelte';
	import HeaderNavigation from '$lib/components/company-profile/HeaderNavigation.svelte';
	import {
		Component,
		ListTodo,
		SlidersHorizontal,
		Workflow,
		ChartNoAxesColumnIncreasing,
		MessageCircle,
		Search,
		Settings,
		UsersRound,
		GraduationCap,
		MoveRight
	} from '@lucide/svelte';

	const main = {
		workflows: [
			{
				title: 'DESIGN',
				description: 'Design high-quality workflow aligned with your positioning',
				icon: Component
			},
			{
				title: 'AI PROCESS',
				description: 'Build AI workflows that process input and generate controlled output',
				icon: Workflow
			},
			{
				title: 'FILTERING',
				description: 'Filter for relevance, not volume',
				icon: SlidersHorizontal
			},
			{
				title: 'SUPERVISE',
				description: 'Ensure human supervision remains part of the decision layer',
				icon: ListTodo
			}
		],
		solutions: [
			{
				icon: Search,
				title: 'outsales',
				subhead: 'effortless lead generation',
				type: 'list',
				contents: [
					{
						label: 'Lead Generator using Profile Scraper',
						content: 'Structured prospect acquisition based on defined criteria.'
					},
					{
						label: 'AI Agent for Personalized Sales Messaging',
						content: 'Context-aware outreach tailored to role, industry, and positioning.'
					},
					{
						label: 'Lead Tracker',
						content: 'Centralized visibility of interactions, responses, and pipeline movement.'
					}
				]
			},
			{
				icon: MessageCircle,
				title: 'insales',
				subhead: 'instant lead engagement',
				type: 'list',
				contents: [
					{
						label: 'AI Autoreply Sales Agent',
						content: 'Intelligent inhandling aligned with your knowledge base and pricing logic.'
					},
					{
						content: 'WhatsApp integration'
					},
					{
						content: 'Landing page chatbot implementation'
					}
				]
			},
			{
				icon: ChartNoAxesColumnIncreasing,
				title: 'project management',
				subhead: 'sales organization simplified',
				type: 'paragraph',
				contents: [
					{
						label: '',
						content: [
							'We build structured project management systems for sales teams that can integrate with other departments, enabling broader operational alignment across your organization'
						]
					},
					{
						label: '',
						content: ['Sales does not operate in isolation. Your systems should not either.']
					}
				]
			}
		],
		philosophies: [
			'The name “Stomata” comes from biology: microscopic pores on a leaf that regulate input and output.',
			'They allow carbon dioxide to enter. They release oxygen. They control exchange with precision.',
			'We apply the same principle to business systems: Data flows in. Intelligence is processed. Actionable output is generated.',
			'Controlled exchange. Structured execution.'
		],
		next: [
			{
				icon: Settings,
				title: 'End-to-end AI-integrated ERP systems',
				description: ['From a passive system of record into a proactive operational partner']
			},
			{
				icon: UsersRound,
				title: 'AI-enhanced HR systems',
				description: [
					'Time to offload administrative work and implement reduced time-to-hire, improved new-hire ramp-up, and more actionable retention signals.',
					'KPI stuff, Resume Selektor'
				]
			},
			{
				icon: GraduationCap,
				title: 'Knowledge productivity tools for enterprise teams',
				description: [
					'Centralize documentation, make knowledge discoverable with semantic search and AI summarization, and embed that knowledge directly into team workflows and collaboration tools'
				]
			}
		]
	};
</script>

<header class="text-primary-900">
	<HeaderNavigation hideIconBG={true} />
	<img
		src="/images/headers/abstract-glass-6.webp"
		alt="about-header"
		class="my-10 h-auto w-screen object-cover object-bottom xl:h-120"
	/>
</header>

<main class="text-primary-800">
	<section id="about-us" class="mb-20 grid grid-cols-1 md:mx-auto md:max-w-480 md:grid-cols-5">
		<div class="hidden place-content-center md:col-span-2 md:grid">
			<p class="">What is</p>
			<p class="font-semibold">STAUMATA</p>
		</div>
		<div class="col-span-1 flex flex-col gap-4 px-4 md:col-span-3 md:px-8">
			<h2 class="section-header">about us</h2>
			<p class="md:max-w-160">
				Stomata is an end-to-end sales infrastructure powered by human-supervised AI.
			</p>
			<p class="md:max-w-160">
				We design and build customized AI systems for sales and marketing teams, not generic
				platforms built for everyone. Every architecture we develop is tailored to your workflows,
				your market, and your operational standards.
			</p>
			<p class="md:max-w-160">
				<span class="block">What we build is not “off-the-shelf.”</span>
				<span class="block">It is engineered <strong><i>specifically for you.</i></strong></span>
			</p>
			<button class="button-md md:button-lg contain-primary w-fit shrink-0">
				<span>Book A Meeting</span>
				<MoveRight class="size-4 stroke-1" />
			</button>
		</div>
	</section>

	<section id="how-we-work" class="my-20 flex w-full flex-col gap-4 px-4 md:mx-auto md:max-w-480">
		<h2 class="section-header">how we work</h2>
		<div>
			<p class="">We combine AI automation with structured system design.</p>
			<p class="">
				Every implementation begins with understanding your sales process : how you source leads,
				how you qualify them, how conversations move, and how deals are closed.
			</p>
		</div>

		<div class="flex flex-col gap-0 md:flex-row md:gap-8">
			{#each main.workflows as workflow}
				<div class="flex flex-col gap-4 px-6 py-8 md:max-w-50">
					<workflow.icon class="stroke-1" />
					<p class="font-semibold">[{workflow.title}]</p>
					<p>{workflow.description}</p>
				</div>
			{/each}
		</div>
		<div class="">
			<p class="">
				If you require lead generation, we identify prospects that match your criteria — not
				inflated lists that waste time. If you require outreach automation, we build contextual
				messaging systems that reflect your brand.
			</p>
			<p class="mb-4">
				If you require outreach automation, we build contextual messaging systems that reflect your
				brand.
			</p>
			<div>
				<p class="">The objective is not automation for its own sake.</p>
				<p class="">The objective is precision.</p>
			</div>
		</div>
	</section>

	<img
		src="/images/headers/abstract-glass-7.webp"
		alt="about-header"
		class="h-auto w-screen object-cover object-bottom xl:h-80"
	/>

	<section
		id="solutions-we-provide"
		class="relative -top-5 mb-20 px-4 md:-top-12 md:mx-auto md:max-w-480 md:px-8"
	>
		<h2 class="section-header mb-4 w-full text-right md:mb-8">solutions we provide</h2>
		<div class="flex flex-col gap-8 md:flex-row md:justify-center">
			{#each main.solutions as solution}
				<div
					class="flex flex-col gap-4 border border-primary-800 px-4 py-8 md:max-w-100 md:flex-1 md:shrink-0"
				>
					<solution.icon class="size-6 stroke-2" />
					<p class="text-2xl font-semibold uppercase md:mt-8 md:text-5xl">{solution.title}</p>
					<p class="font-semibold uppercase">[{solution.subhead}]</p>
					{#if solution.type === 'list'}
						<ul class="list-outside list-disc pl-6">
							{#each solution.contents as list}
								<li>
									<span class="block font-semibold">{list.label}</span>
									<span class="block">{list.content}</span>
								</li>
							{/each}
						</ul>
					{:else if solution.type === 'paragraph'}
						{#each solution.contents as list}
							<p class="mb-2">{list.content}</p>
						{/each}
					{/if}

					{#each solution.contents as content}{/each}
				</div>
			{/each}
		</div>
	</section>

	<div class="my-20 w-full bg-muted-100 py-8 md:py-16">
		<section id="philosophies" class="grid grid-cols-1 md:mx-auto md:max-w-480 md:grid-cols-5">
			<div class="col-span-1 flex flex-col gap-4 px-4 md:col-span-3 md:px-8">
				<h2 class="section-header w-full text-right">pholosophies</h2>
				<div class="flex flex-col items-end gap-4">
					{#each main.philosophies as phil}
						<p class="text-right md:max-w-120">{phil}</p>
					{/each}
				</div>
			</div>
			<div class="hidden place-content-center md:col-span-2 md:grid">
				<p class="">How we</p>
				<p>became <span class="font-semibold">STAUMATA</span></p>
			</div>
		</section>
	</div>

	<section id="whats-next" class="my-20 flex flex-col gap-4 px-4 md:mx-auto md:max-w-480 md:px-8">
		<h2 class="section-header w-full text-center">what's next?</h2>
		<p class="text-center">Yep, you read right! We are expanding beyond sales infrastructure.</p>
		<div class="flex flex-col gap-4 md:flex-row md:justify-center">
			{#each main.next as next}
				<div
					class="flex flex-col gap-4 border border-primary-800 px-4 py-8 md:max-w-100 md:flex-1 md:shrink-0"
				>
					<next.icon class="stroke-1" />
					<p class="text-2xl font-semibold md:mt-8 md:text-5xl">{next.title}</p>
					{#each next.description as desc}
						<p class="">{desc}</p>
					{/each}
				</div>
			{/each}
		</div>
		<p class="text-center">
			<span class="block">The goal is not simply automation.</span>
			<span class="block">It is intelligent operational architecture across the organization.</span>
		</p>
	</section>

	<section id="the-team" class="my-20"></section>

	<section
		id="work-with-us"
		class="my-20 flex flex-col items-center gap-4 px-4 text-center md:mx-auto md:max-w-480 md:px-8"
	>
		<h2 class="section-header w-full">working with us</h2>
		<p class="">Engagement begins with a consultation.</p>
		<p class="md:max-w-120">
			Book a video call with our team to discuss your current sales structure and objectives. We
			assess fit, define scope, and propose a tailored system aligned with your needs.
		</p>
		<p class=" mb-8">
			<span class="block">Every implementation is deliberate.</span>
			<span class="block">Every system is built with intent.</span>
		</p>
		<button class="button-md md:button-lg contain-primary w-fit shrink-0">
			<span>Book A Meeting</span>
			<MoveRight class="size-4 stroke-1" />
		</button>
	</section>
</main>

<!-- ---------- FOOTER -->
<Footer />
