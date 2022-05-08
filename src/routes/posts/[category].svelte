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
	import ContentCard from '../../components/ContentCard.svelte';
	export let services;
	export let categories;
</script>

<div class="dropdown">
	<label tabindex="0" class="btn m-1" for="category-dropdown">Category</label>
	<ul id="category-dropdown" tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
		{#each categories.categories as data}
			<li><a href="/posts/{data.name}">{data.name}</a></li>
		{/each}
	</ul>
</div>
<div class="p-2 gap-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
	{#each services.services as data}
		<ContentCard {data} />
	{/each}
</div>
