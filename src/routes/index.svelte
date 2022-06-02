<script context="module">
	export const load = async ({ fetch, session }) => {
		const resPosts = await fetch('/api/posts.json');
		const resCategories = await fetch('/api/categories.json');
		if (resPosts.ok && resCategories.ok) {
			const services = await resPosts.json();
			const categories = await resCategories.json();
			return {
				props: {
					services: services.services.data,
					categories: categories.categories.data,
					user: session.user
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
	import ContentCardList from '../components/ContentCardList.svelte';
	import Lottie from '../components/Lottie.svelte';

	export let services;
	export let categories;
	export let user;

</script>

<div class="flex flex-col justify-center items-center p-2">
	<h1 class="font-bold text-2xl">Welcome</h1>
	<div class="flex">
		<p>Find Tools, Services and Apps that are built using the Lightning Network</p>
		<div class="w-6 h-6"><Lottie lottiePath="/animations/lightning.json" /></div>
	</div>
	{#if user}
	<p>
		You can help me list more services by <a href="/add/proposal" class="link link-primary">adding a Listing</a>.
	</p>
	{/if}
</div>

<ContentCardList {services} {categories}></ContentCardList>



