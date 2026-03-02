<script lang="ts">
	import { page } from '$app/state';
	import Footer from '$lib/components/company-profile/Footer.svelte';
	import HeaderNavigation from '$lib/components/company-profile/HeaderNavigation.svelte';

	let { children } = $props();
	const headerImageHref = $derived(page?.data?.headerImageHref);
</script>

<header class="text-primary-900">
	<HeaderNavigation hideIconBG={true} />
	{#if headerImageHref !== false}
		<img
			data-aos="fade-up"
			data-aos-duration={300}
			data-aos-easing="ease-out-cubic"
			src={typeof headerImageHref === 'string' && headerImageHref.length > 0
				? headerImageHref
				: '/images/headers/abstract-glass-6.webp'}
			alt="about-header"
			class="my-10 h-auto w-screen object-cover object-center xl:h-120"
		/>
	{/if}
</header>

{@render children?.()}

<Footer />
