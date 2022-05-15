<script>
	import Lottie from './Lottie.svelte';
	export let data;
</script>

<div class="m-2 card max-w-sm h-96 bg-base-200 shadow-xl">
	<a href={data.externalUrl} class="hover:opacity-90">
		<figure><img class="p-2 max-h-14" src={data.logo.url} alt="{data.title}-logo" /></figure>
	</a>
	<div class="card-body">
		<h2 class="card-title">
			<a href={data.externalUrl} class="link link-primary">{data.title}</a>
		</h2>
		<p>{data.abstract}</p>
		<div class="flex justify-between">
			<div class="card-actions justify-end">
				{#each data.categories as category}
					<div class="badge badge-outline">
						{category.name}
					</div>
				{/each}
			</div>
			<!-- <div class="flex">
				<div class="h-8 w-8">
					<Lottie lottiePath="/animations/heart.json" />
				</div>
				<div class="h-8 w-8">
					<Lottie lottiePath="/animations/lightning.json" />
				</div>
			</div> -->
		</div>
	</div>
</div>
