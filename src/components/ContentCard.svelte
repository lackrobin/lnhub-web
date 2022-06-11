<script>
	export let data;

</script>

<div class="m-2 card max-w-sm h-96 bg-base-200 shadow-xl">
	<a href={data.externalUrl} class="hover:opacity-90">
		<figure><img class="p-2 max-h-14" src={data.imageUrl} alt="{data.title}-logo" /></figure>
	</a>
	<div class="card-body">
		<h2 class="card-title">
			<a href={data.externalUrl} class="link link-primary">{data.title}</a>
		</h2>
		<p>{data.abstract}</p>
		<div class="flex justify-between">
			<div class="card-actions justify-end">
					<div class="badge badge-outline">
						{data.category}
					</div>
			</div>
		</div>
	</div>
</div>
