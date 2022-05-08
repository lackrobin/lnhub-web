<script context="module">
	export const load = async ({ fetch }) => {
		const resPosts = await fetch('/api/posts.json');
		const resCategories = await fetch('/api/categories.json');
		if (resPosts.ok && resCategories.ok) {
			const services = await resPosts.json();
			const categories = await resCategories.json();
			return {
				props: {
					services,
					categories
				},
				cache: {
					maxage: 300,
					private: false
				}
			};
		}
	};
</script>

<script>
	import ContentCard from '../components/ContentCard.svelte';
	import Lottie from '../components/Lottie.svelte';

	export let services;
	export let categories;
</script>

<div class="flex flex-col justify-center items-center p-2">
	<h1 class="font-bold text-2xl">Welcome</h1>
	<div class="flex">
		<p>Welcome to LNHub. Here you can find <a href="/posts" class="link link-primary">services</a> related to Bitcoin Lightning</p>
		<div class="w-6 h-6"><Lottie lottiePath="/animations/lightning.json" /></div>
	</div>
	<!-- <p>
		You can help me list more services <a href="/proposal">Add a Listing</a>
	</p> -->
</div>


<div class="dropdown">
	<label tabindex="0" class="btn m-1" for="categories-dropdown">Category</label>
	<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52" id="categories-dropdown">
		{#each categories.categories as data}
			<li><a sveltekit:prefetch href="/posts/{data.name}">{data.name}</a></li>
		{/each}
	</ul>
</div>
<div class="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
	{#each services.services as data}
		<ContentCard {data} />
	{/each}
</div>



