<script lang="ts">
	import Footer from '$lib/components/company-profile/Footer.svelte';
	import HeaderNavigationPortfolio from '$lib/components/company-profile/HeaderNavigationPortfolio.svelte';
	import { cn } from '$lib/utils/core.helper';
	import { MoveRight, Sparkles } from '@lucide/svelte';

	const data = {
		name: 'nijiko suryadikara',
		nick: 'nijiko',
		title: {
			specialty1: 'uiux &',
			specialty2: 'frontend',
			title: 'engineer'
		},
		intro: [
			'Frontend Developer by profession, UI/UX strategist by instinct, part-time programming teacher at heart.',
			'After hours? Nail art painting, fiction readathons, video games, and cottage-life daydreams with one too many animals.',
			'Explore my web-app systems and UX deep dives, built with structure, professionalism, and care.'
		],
		links: [
			{ type: 'linkedin', link: 'https://www.linkedin.com/in/nijikos/' },
			{ type: 'behance', link: 'https://www.behance.net/nijikos' },
			{ type: 'medium', link: 'https://medium.com/@nijikos' }
		],
		connectHref: 'https://wa.me/+6281268424290',
		imageSrc: '',
		experienceYearStart: 2020,
		totalProjects: 35,
		skills: [
			// Frontend Core
			{ label: 'HTML5 / CSS3 / Modern JavaScript (ES6+)', tag: 'frontend' },
			{ label: 'TypeScript', tag: 'frontend' },
			{ label: 'React', tag: 'frontend' },
			{ label: 'Next.js (SSR, SSG, App Router)', tag: 'frontend' },
			// { label: 'Tauri (Desktop App Integration)', tag: 'frontend' },
			{ label: 'Component-Driven Architecture', tag: 'architecture' },
			{ label: 'Design Systems & Reusable UI Libraries', tag: 'architecture' },
			{ label: 'State Management (Context API, Zustand, Redux)', tag: 'frontend' },
			{ label: 'REST API Integration', tag: 'integration' },

			// Performance
			{ label: 'Web Performance Optimization (Core Web Vitals)', tag: 'performance' },
			// { label: 'Code Splitting & Lazy Loading', tag: 'performance' },
			// { label: 'Bundle Size Optimization', tag: 'performance' },
			// { label: 'Image Optimization Strategies', tag: 'performance' },
			// { label: 'Render Optimization & Memoization', tag: 'performance' },
			{ label: 'SSR vs CSR Strategy Decisions', tag: 'performance' },
			// { label: 'Caching Strategies (HTTP, SWR Patterns)', tag: 'performance' },
			// { label: 'Performance Profiling (Chrome & React DevTools)', tag: 'performance' },

			// Testing & QA
			// { label: 'Unit Testing (Jest / Vitest)', tag: 'testing' },
			// { label: 'Component Testing (React Testing Library)', tag: 'testing' },
			// { label: 'End-to-End Testing (Playwright / Cypress)', tag: 'testing' },
			{ label: 'API Testing (Postman)', tag: 'testing' },
			// { label: 'Test Coverage & CI Integration', tag: 'testing' },
			// { label: 'Regression Testing Strategy', tag: 'testing' },
			// { label: 'Production Debugging & Issue Investigation', tag: 'testing' },

			// Security
			// { label: 'XSS Prevention & Input Sanitization', tag: 'security' },
			{ label: 'CSRF Awareness & Token Handling', tag: 'security' },
			{ label: 'Secure Authentication Flows (JWT, OAuth Basics)', tag: 'security' },
			{ label: 'Secure Cookie & Local Storage Handling', tag: 'security' },
			// { label: 'Environment Variable Management', tag: 'security' },
			{ label: 'Role-Based UI Rendering', tag: 'security' },
			// { label: 'Dependency Vulnerability Auditing (npm audit)', tag: 'security' },
			{ label: 'OWASP Frontend Security Awareness', tag: 'security' },

			// UI / UX
			{ label: 'Wireframing & Prototyping', tag: 'uiux' },
			{ label: 'Figma', tag: 'uiux' },
			{ label: 'User Research & Analysis', tag: 'uiux' },
			// { label: 'Usability Testing', tag: 'uiux' },
			// { label: 'Interaction Design', tag: 'uiux' },
			// { label: 'Accessibility (WCAG, Semantic HTML, ARIA)', tag: 'uiux' },

			// Collaboration & Workflow
			{ label: 'Git & GitHub (PR Workflow, Branching Strategy)', tag: 'workflow' },
			// { label: 'Agile / Iterative Development', tag: 'workflow' },
			{ label: 'Notion', tag: 'workflow' },
			// { label: 'Cross-functional Collaboration', tag: 'workflow' },

			// Creative Tools
			{ label: 'Adobe Illustrator', tag: 'design' },
			{ label: 'Affinity Designer', tag: 'design' }
		],
		experiences: [
			{
				period: 'Apr 2023 – Present',
				jobTitle: 'Front-end Developer (Full-time)',
				companyName: 'Platter AI, Jakarta',
				impactPoints: [
					'Led frontend architecture for a RAG-based Knowledge Management System (KMS) AI web app serving 5+ enterprise clients with hundreds of active users.',
					'Revamped application from Next.js to SvelteKit, reducing build time from 10+ minutes to ~5 minutes and significantly decreasing bundle size.',
					'Improved Lighthouse performance scores to consistently 90+ through optimization strategies, lazy loading, and render efficiency improvements.',
					'Designed and implemented a custom component library and design system using TailwindCSS, establishing scalable UI standards across the product.',
					'Implemented secure authentication flow using PKCE and BFF pattern, strengthening frontend security architecture.',
					'Integrated REST APIs and WebSocket connections to support real-time, AI chat knowledge collection workflows.',
					'Acted as Lead Frontend Engineer, making key architectural and technical decisions for all frontend initiatives.'
				]
			},
			{
				period: 'Jun 2022 – Feb 2023',
				jobTitle: 'Front-end Developer (Part-time)',
				companyName: 'Haer, Jakarta',
				impactPoints: [
					'Contributed to building an end-to-end HRM system from scratch, developing core modules including Access Control (ACL) and organizational hierarchy management.',
					'Integrated REST APIs to enable dynamic employee data handling across multi-level organizational structures.',
					'Collaborated in establishing a reusable frontend component library to standardize UI across modules.',
					'Worked closely with backend engineers to ensure consistent data flow and system reliability.'
				]
			},
			{
				period: 'Aug 2021 – Present',
				jobTitle: 'Programming Teacher (Part-time)',
				companyName: 'PT Timedoor Indonesia, Jakarta',
				impactPoints: [
					'Taught JavaScript, React, React Native, Phaser, and basic AI engineering to students aged 10–18.',
					'Delivered 15+ classes (2–4 students each) with a 100% completion rate.',
					'Supervised and guided 20+ final student projects including games, web applications, and mobile apps.',
					'Improved student progress through structured curriculum guidance and personalized mentoring.',
					'Conducted Parent-Teacher Meetings (PTM) to communicate student development and learning outcomes.'
				]
			},
			{
				period: 'Aug 2021 – Apr 2023',
				jobTitle: 'Front-end Developer (Full-time)',
				companyName: 'PT Datasintesa, Jakarta',
				impactPoints: [
					'Served as main frontend engineer for two large-scale government systems (BTS and Akses Internet) used by thousands of Bakti Kominfo staff nationwide.',
					'Built Next.js applications from scratch to support geospatial research and infrastructure planning initiatives.',
					'Developed advanced map-based features using Mapbox, including BTS tower location planning, spatial analysis, and internet cable route generation.',
					'Implemented complex geospatial interactions such as dynamic marker clustering, coordinate calculations, path visualization, and distance-based logic.',
					'Optimized applications for low-bandwidth environments by implementing IndexedDB-based offline persistence for large forms and geospatial datasets.',
					'Integrated REST APIs and collaborated closely with backend engineers and UI designers to deliver scalable enterprise systems.',
					'Applied frontend security best practices including CSP configuration reviews and OWASP-based vulnerability checks.'
				]
			}
		],
		projects: [
			{
				img: '/images/projects/nijiko-project-1.webp',
				category: 'UIUX',
				title: 'Case Study: Gramedia Digital Mobile App',
				description:
					'A redesign case study completed during my UI/UX training at Purwadhika. I explored usability gaps in the original Gramedia Digital app through user research and affinity mapping to uncover real friction points. The insights guided a refined user flow, structured flowcharts, and an interactive prototype. The final design was validated through usability testing to evaluate clarity, efficiency, and user preference.',
				link: 'https://medium.com/@nijikos/case-study-gramedia-digital-ebook-app-redesign-25d4adef655f'
			},
			{
				img: '/images/projects/nijiko-project-2.webp',
				category: 'AI Platform & Landing Page',
				title: 'Anti-Bullying AI Chat Companion',
				description:
					'A developing digital platform designed to help address bullying in university environments. The project combines an AI-powered chat companion with an educational landing page featuring psychology-based articles and LMS content focused on anti-bullying awareness. It also integrates real-time communication using WebSocket and supports secure video streaming through m3u8 technology. Currently in active development.',
				link: '/team/nijiko'
			},
			{
				img: '/images/projects/nijiko-project-3.webp',
				category: 'Dashboard System',
				title: 'Integrated Site Survey & Monitoring System',
				description:
					'An integrated system designed to manage and monitor telecom site surveys for BTS development. The platform organizes the full workflow, from assigning surveyors and conducting detailed field assessments to handling review, revision, and approval processes. I structured the interface to support complex survey forms, clear status tracking, and hierarchical admin roles. The system also includes a map-based dashboard to visualize tower conditions and support better infrastructure decision-making.',
				link: '/team/nijiko'
			}
		]
	};

	const yearsExperience = (startYear: number) => {
		const currentYear = new Date().getFullYear();
		return currentYear - startYear;
	};
</script>

<!-- ---------- HERO -->
<header class="text-primary-900">
	<HeaderNavigationPortfolio {data} />

	<div
		class="mx-auto my-10 flex w-fit flex-col-reverse items-end text-primary-800 lg:my-20 lg:flex-row"
	>
		<div class="relative -top-24 flex flex-col gap-2 px-4 md:-top-28 lg:top-0 lg:-right-40 lg:px-0">
			<p class="">Hello, I am <span class="uppercase">{data.name}</span></p>
			<div class="text-6xl md:text-7xl lg:text-9xl">
				<p class="leading-14 font-semibold uppercase lg:leading-26">{data.title.specialty1}</p>
				<p class="leading-14 uppercase lg:leading-26">{data.title.specialty2}</p>
				<p class="leading-14 font-semibold uppercase lg:leading-26">{data.title.title}</p>
			</div>
			<p class="max-w-110">
				{#each data.intro as intro}
					<span class="mb-2 block text-sm md:text-base">{intro}</span>
				{/each}
			</p>
			<div class="mt-2 flex flex-row items-center justify-start gap-4 lg:mt-10">
				{#each data.links as link}
					<a
						href={link.link}
						target="_blank"
						class="grid h-12 w-12 place-content-center hover:bg-muted-100"
					>
						<img src={`/images/logo/external/${link.type}.png`} alt="social-icons" />
					</a>
				{/each}
				<button class="button-md md:button-lg contain-primary w-fit shrink-0">
					<span>Let's Connect</span>
					<MoveRight class="size-4 stroke-1" />
				</button>
			</div>
		</div>
		<div class="flex flex-col-reverse items-end gap-2 px-4 lg:flex-row lg:gap-6 lg:px-0">
			<img
				src="/images/portraits/portrait-nijiko.jpeg"
				alt="portrait-nijiko"
				class="h-auto w-32 md:w-52 lg:h-152 lg:w-114"
			/>
			<div class="flex flex-row items-end gap-2 lg:flex-col lg:items-start">
				<div class="">
					<p class="text-lg font-semibold md:text-3xl lg:text-6xl">
						{yearsExperience(data.experienceYearStart)}+
					</p>
					<p class="text-2xs md:text-sm lg:text-base">years experience</p>
				</div>
				<div class="">
					<p class="text-lg font-semibold md:text-3xl lg:text-6xl">{data.totalProjects}+</p>
					<p class="text-2xs md:text-sm lg:text-base">projects</p>
				</div>
			</div>
		</div>
	</div>
</header>
<!-- ---------- MAIN -->
<main class="">
	<section class="my-20 bg-muted-100 py-8 text-primary-800 md:py-16">
		<div class="flex w-full flex-col gap-4 px-4 md:mx-auto md:max-w-480 md:px-8">
			<p class="section-header">Skills</p>
			<div class="flex flex-col gap-2 md:flex-row md:flex-wrap">
				{#each data.skills as skill}
					<div
						class="flex flex-row items-start gap-6 border border-primary-800 px-6 py-5 md:items-center md:gap-2"
					>
						<Sparkles class="mt-1 size-4 shrink-0 stroke-1 md:mt-0" />
						<div class="flex flex-col items-start gap-0 md:flex-row md:items-center md:gap-2">
							<p class="uppercase">{skill.label}</p>
							<p class="w-fit rounded-full bg-muted-200 px-4 py-1 text-xs md:px-2">{skill.tag}</p>
						</div>
					</div>
				{/each}
			</div>
			<p class="text-sm md:text-base">
				Giving you more time to focus on building relationships and closing deals
			</p>
		</div>
	</section>

	<section
		class="mb-20 grid grid-cols-1 gap-4 text-primary-800 lg:mx-auto lg:max-w-480 lg:grid-cols-3 lg:gap-0"
	>
		<div class="col-span-1 pl-4 lg:col-span-1 lg:pl-8">
			<p class="text-left">
				<span class="section-header block">professional</span>
				<span class="section-header block">experience</span>
			</p>
		</div>
		<div class="col-span-1 flex flex-col gap-4 px-4 lg:col-span-2 lg:px-8">
			{#each data.experiences as exp}
				<div class="flex flex-col gap-4 md:flex-row md:gap-8">
					<div class="h-fit shrink-0">
						<p class="w-48 border border-primary-800 px-3 py-2">{exp.period}</p>
					</div>
					<div>
						<p class="text-lg text-primary-800">
							<span class="font-semibold">[{exp.companyName}]</span>
							<span class="font-semibold">{exp.jobTitle}</span>
						</p>
						<ul class="mt-4 list-outside list-disc pl-8">
							{#each exp.impactPoints as point}
								<li class="pl-2 font-light text-primary-700">{point}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="my-20 flex w-full flex-col gap-4 text-primary-800 md:mx-auto md:max-w-480">
		<div class="px-4 md:px-8">
			<p class="section-header">[portfolio]</p>
			<p class="section-header">my highlighted projects</p>
		</div>
		<div class=" flex flex-col gap-0">
			{#each data.projects as project, i}
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
						<a href={project.link} target="_blank" class="link-primary">see more</a>
					</div>
				</div>
			{/each}
		</div>
	</section>

	<section class="my-20 grid place-content-center">
		<button class="button-md md:button-lg contain-primary w-fit shrink-0">
			<span>Let's Connect</span>
			<MoveRight class="size-4 stroke-1" />
		</button>
	</section>
</main>
<!-- ---------- FOOTER -->
<Footer />
