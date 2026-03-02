<script lang="ts">
	import InputWrapper from '$lib/components/ui/form-elements/InputWrapper.svelte';

	const form = $state({
		criteria: '',
		numberOfLeads: '',
		enrich: true,
		language: ''
	});

	function submit(e: SubmitEvent) {
		e.preventDefault();
		console.log('Form submitted:', {
			criteria: form.criteria,
			numberOfLeads: form.numberOfLeads,
			enrich: form.enrich,
			language: form.language
		});
	}
</script>

<section
	data-aos="fade-up"
	class="flex items-center justify-center px-8 py-16 text-primary-800 md:py-32 lg:px-8"
>
	<div class="w-full max-w-xl rounded-2xl bg-white p-8 shadow-sm">
		<!-- Header -->
		<div class="mb-8 flex items-center gap-4">
			<div class="flex items-center justify-center">
				<img src="/images/graphics/import-arrow.png" alt="import-arrow-icon" class="h-12 w-14" />
			</div>
			<h1 class="text-3xl font-semibold text-green-900">Generate New Leads</h1>
		</div>

		<!-- Form -->
		<form class="space-y-6" onsubmit={submit}>
			<!-- Criteria -->
			<div class="space-y-2">
				<p class="text-lg font-medium text-black">Describe leads criteria</p>
				<InputWrapper>
					<input
						type="text"
						placeholder="Example: HR AI startups in indonesia"
						class="w-full"
						bind:value={form.criteria}
					/>
				</InputWrapper>
			</div>

			<!-- Number -->
			<div class="space-y-2">
				<p class="text-lg font-medium text-black">Number of generated leads</p>
				<InputWrapper>
					<input
						type="number"
						max="50"
						placeholder="Maximum 50"
						class="w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-lg outline-none focus:ring-2 focus:ring-green-600"
						bind:value={form.numberOfLeads}
					/>
				</InputWrapper>
			</div>

			<!-- Enrich checkbox -->
			<div class="flex items-center gap-4">
				<input
					id="enrich"
					type="checkbox"
					class="h-6 w-6 accent-green-700"
					bind:checked={form.enrich}
				/>
				<p class="text-lg font-medium">Enrich and generate personalized outreach message</p>
			</div>

			<!-- Language -->
			<div class="space-y-2">
				<p class="text-lg font-medium text-black">Outreach message language</p>
				<InputWrapper>
					<select class="w-full bg-none" bind:value={form.language}>
						<option value="" disabled selected> Choose one </option>
						<option value="english">English</option>
						<option value="indonesian">Indonesian</option>
						<option value="spanish">Spanish</option>
					</select>
				</InputWrapper>
			</div>

			<!-- Button -->
			<button
				type="submit"
				class="mt-4 flex w-full items-center justify-center gap-4 rounded-lg bg-black py-4 text-xl font-medium text-white transition hover:opacity-90"
			>
				Generate
				<span class="text-2xl">→</span>
			</button>
		</form>
	</div>
</section>
