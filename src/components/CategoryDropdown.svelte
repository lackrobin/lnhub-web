<script>
    import { page } from '$app/stores';
	export let categories;
    
</script>

<div class="dropdown">
	<label tabindex="0" class="btn" for="categories-dropdown">Category</label>
	<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52" id="categories-dropdown">
		{#each categories.categories as data}
			<li><a sveltekit:prefetch href="/posts/{data.name}" class="{$page.url.pathname.includes(encodeURIComponent(data.name))?"font-bold": ""}">{data.name}</a></li>
		{/each}
	</ul>
</div>