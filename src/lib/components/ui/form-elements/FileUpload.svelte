<script lang="ts">
	import { FileUpload } from '@skeletonlabs/skeleton-svelte';
	import { FileUp } from 'lucide-svelte';
</script>

<FileUpload class="" maxFiles={10}>
	<FileUpload.Dropzone class="border border-dashed border-slate-300">
		<FileUp size={32} strokeWidth={1.2} />
		<span>Pilih dokumen atau tarik ke sini</span>
		<FileUpload.Trigger class="button-md contain-primary">Browse Files</FileUpload.Trigger>
		<FileUpload.HiddenInput multiple={true} />
	</FileUpload.Dropzone>
	<FileUpload.ItemGroup>
		<FileUpload.Context>
			{#snippet children(fileUpload)}
				{#each fileUpload().acceptedFiles as file (file.name)}
					{console.log('loop file children', { file })}
					<FileUpload.Item {file}>
						<FileUpload.ItemName>{file.name}</FileUpload.ItemName>
						<FileUpload.ItemSizeText>{file.size} bytes</FileUpload.ItemSizeText>
						<FileUpload.ItemDeleteTrigger />
					</FileUpload.Item>
				{/each}
			{/snippet}
		</FileUpload.Context>
	</FileUpload.ItemGroup>
	<FileUpload.ClearTrigger>Clear Files</FileUpload.ClearTrigger>
</FileUpload>
