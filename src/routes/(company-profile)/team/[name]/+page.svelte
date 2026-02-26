<script lang="ts">
	import Footer from '$lib/components/company-profile/Footer.svelte';
	import HeaderNavigationPortfolio from '$lib/components/company-profile/HeaderNavigationPortfolio.svelte';
	import { cn } from '$lib/utils/core.helper';
	import { MoveRight, Sparkles } from '@lucide/svelte';
	import type { PageData } from './$types';

	const { data } = $props<{ data: PageData }>();
	const member = $derived(data?.member);

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
			<p class="">Hello, I am <span class="uppercase">{member.name}</span></p>
			<div class="text-6xl md:text-7xl lg:text-9xl">
				<p class="leading-14 font-semibold uppercase lg:leading-26">{member.title.specialty1}</p>
				<p class="leading-14 uppercase lg:leading-26">{member.title.specialty2}</p>
				<p class="leading-14 font-semibold uppercase lg:leading-26">{member.title.title}</p>
			</div>
			<p class="max-w-110">
				{#each member.intro as intro}
					<span class="mb-2 block text-sm md:text-base">{intro}</span>
				{/each}
			</p>
			<div class="mt-2 flex flex-row items-center justify-start gap-4 lg:mt-10">
				{#each member.links as link}
					<a
						href={link.link}
						target="_blank"
						class="grid h-12 w-12 place-content-center hover:bg-muted-100"
					>
						<img src={`/images/logo/external/${link.type}.png`} alt="social-icons" />
					</a>
				{/each}
				<a
					href={member.connectHref}
					target="_blank"
					class="button-md md:button-lg contain-primary w-fit shrink-0"
				>
					<span>Let's Connect</span>
					<MoveRight class="size-4 stroke-1" />
				</a>
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
						{yearsExperience(member.experienceYearStart)}+
					</p>
					<p class="text-2xs md:text-sm lg:text-base">years experience</p>
				</div>
				<div class="">
					<p class="text-lg font-semibold md:text-3xl lg:text-6xl">{member.totalProjects}+</p>
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
				{#each member.skills as skill}
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
			{#each member.experiences as exp}
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
			{#each member.projects as project, i}
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
		<a
			href={member.connectHref}
			target="_blank"
			class="button-md md:button-lg contain-primary w-fit shrink-0"
		>
			<span>Let's Connect</span>
			<MoveRight class="size-4 stroke-1" />
		</a>
	</section>
</main>
<!-- ---------- FOOTER -->
<Footer />
