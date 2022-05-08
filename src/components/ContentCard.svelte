<script>
	export let data;
</script>

<div class="card max-w-sm h-96 bg-base-200 shadow-xl">
	<a href={data.externalUrl} class="hover:opacity-90">
		<figure><img class="max-h-12" src={data.logo.url} alt="{data.title}-logo" /></figure>
	</a>
	<div class="card-body">
		<h2 class="card-title">
			{data.title}
		</h2>
		<p>{data.abstract}</p>
		<div class="card-actions justify-end">
			{#each data.categories as category}
				<div class="badge badge-outline">
					{category.name}
				</div>
			{/each}
		</div>
	</div>
</div>
