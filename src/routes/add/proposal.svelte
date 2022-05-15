<script context="module">
	export const load = async ({ fetch }) => {
		const resCategories = await fetch('/api/categories.json');
		if (resCategories.ok) {
			const categories = await resCategories.json();
			return {
				props: {
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
	export let categories;

	let data = {
		title: '',
		externalUrl: '',
		abstract: '',
		logo: {
			url: 'https://dummyimage.com/600x400/000/fff'
		},
		categories: [{ name: '' }]
	};



</script>

<div class="flex flex-col md:flex-row justify-center items-center p-2 gap-4">
	<div class="flex flex-col">
		<form action="/api/posts.json" method="POST" enctype="multipart/form-data">
			<div class="form-control w-full max-w-xs">
				<label class="label" for="name-input">
					<span class="label-text">Name of the service:</span>
				</label>
				<input
					name="title"
					minlength="3"
					maxlength="50"
					type="text"
					placeholder="Name"
					class="input input-bordered w-full max-w-xs"
					bind:value={data.title}
					id="name-input"
				/>
				<label class="label" for="category-input">
					<span class="label-text">Category:</span>
				</label>
				<select
					name="category"
					bind:value={data.categories[0].name}
					class="select select-bordered w-full max-w-xs"
					id="category-input"
				>
					<option disabled selected>Select a Category</option>
					{#each categories.categories as category}
						<option value={category.name}>{category.name}</option>
					{/each}
				</select>
				<label class="label" for="description-input">
					<span class="label-text">Description:</span>
				</label>
				<textarea
					name="abstract"
					maxlength="200"
					minlength="25"
					bind:value={data.abstract}
					class="textarea textarea-bordered"
					placeholder="Description"
					id="description-input"
				/>
				<label class="label" for="url-input">
					<span class="label-text">URL to Website:</span>
				</label>
				<input
					name="externalUrl"
					bind:value={data.externalUrl}
					type="text"
					id="url-input"
					class="input input-bordered w-full max-w-xs"
				/>

				<label class="label" for="image-input">
					<span class="label-text">Logo URL:</span>
				</label>
				<input
					name="logo"
					bind:value={data.logo.url}
					class="input input-bordered w-full max-w-xs"
					type="text"
					id="image-input"
				/>
				<button class="mt-2 btn btn-primary" type="submit">Submit</button>
			</div>
		</form>
	</div>
	<div class="w-72">
		<div class="card max-w-sm h-96 bg-base-200 shadow-xl">
			<a href={data.externalUrl} class="hover:opacity-90">

				<figure>
					<img class="h-12" src={data.logo.url} alt="Preview" />
				</figure>
			</a>
			<div class="card-body">
				<h2 class="card-title">
					{data.title}
				</h2>
				<p>{data.abstract}</p>
				<div class="card-actions justify-end">
					{#each data.categories as category}
						<div class="badge badge-outline">
							{category.name}
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>
