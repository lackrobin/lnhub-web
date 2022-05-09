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
	import ContentCardList from '../../components/ContentCardList.svelte';
	export let services;
	export let categories;
	console.log(services)

</script>

<ContentCardList {services} {categories} ></ContentCardList>