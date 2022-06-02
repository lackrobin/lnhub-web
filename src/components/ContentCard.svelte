<script>
	import Lottie from './Lottie.svelte';
	import { session } from '$app/stores';
	export let data;

	// const handleLike = async function () {
	// 	const type = 'LIKE';
	// 	const resPosts = await fetch(
	// 		`/api/posts/like.json?type=${type}&username=${$session.user}&serviceID=${data.id}`
	// 	);
	// };
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
			<!-- <div class="flex content font-bold text-red-400 items-center">
				<div class="h-8 w-8" on:click={handleLike}>
					<Lottie
						lottiePath="/animations/heart.json"
						isAutoplay={data.votes.map((e)=> {return e.username}).includes($session.user)}
					/>
				</div>
				<p>
					{data.votes.length}
				</p>
			</div> -->
		</div>
	</div>
</div>
