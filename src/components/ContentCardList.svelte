<script>
	import CategoryDropdown from './CategoryDropdown.svelte';
	import ContentCard from './ContentCard.svelte';

	export let services;
	export let categories;
	let filteredServices = [...services.services];
	let search;

	const updateSearch = () => {
		filteredServices = [...services.services];
		filteredServices = filteredServices.filter((service) => {
			if (service.title.toLowerCase().includes(search.toLowerCase())) {
				return true;
			} else if (service.abstract.toLowerCase().includes(search.toLowerCase())) {
				return true;
			}
		});
	};
</script>

<div class="flex m-4 justify-between gap-2">
	<CategoryDropdown {categories} />
	<div class="form-control">
		<input
			type="text"
			placeholder="Search"
			class="input input-bordered"
			bind:value={search}
			on:input={updateSearch}
		/>
	</div>
</div>
<div class="p-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
	{#each filteredServices as data}
		<ContentCard {data} />
	{/each}
</div>
