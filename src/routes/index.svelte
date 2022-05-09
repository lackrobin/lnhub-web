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
	import ContentCardList from '../components/ContentCardList.svelte';
	import Lottie from '../components/Lottie.svelte';

	export let services;
	export let categories;
</script>

<div class="flex flex-col justify-center items-center p-2">
	<h1 class="font-bold text-2xl">Welcome</h1>
	<div class="flex">
		<p>LNHub.info is a currator of Tools, Services, Apps and more that are built with the Lightning Network</p>
		<div class="w-6 h-6"><Lottie lottiePath="/animations/lightning.json" /></div>
	</div>
	<!-- <p>
		You can help me list more services <a href="/proposal">Add a Listing</a>
	</p> -->
</div>

<ContentCardList {services} {categories}></ContentCardList>



