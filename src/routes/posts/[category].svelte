<script context="module">
	export const load = async ({ fetch, params }) => {
		const resPosts = await fetch(`/api/posts/${params.category}.json`);
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
</script>

<ContentCardList {services} {categories} />
