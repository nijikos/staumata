<script lang="ts">
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
