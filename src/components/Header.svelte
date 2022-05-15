<script>
	import Lottie from '../components/Lottie.svelte';
	import { page } from '$app/stores';
	export let user;
	let title = 'LNHub';
</script>

<header>
	<div class="navbar bg-base-200">
		<div class="navbar-start">
			<div class="dropdown">
				<!-- svelte-ignore a11y-label-has-associated-control -->
				<label tabindex="0" class="btn btn-ghost btn-circle">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M4 6h16M4 12h16M4 18h7"
						/></svg
					>
				</label>
				<ul
					tabindex="0"
					class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
				>
					<li>
						<a sveltekit:prefetch class={$page.url.pathname === '/' ? 'text-teal-700' : ''} href="/"
							>Home</a
						>
					</li>
					<li>
						<a
							sveltekit:prefetch
							class={$page.url.pathname.includes('about') ? 'text-teal-700' : ''}
							href="/about">About</a
						>
					</li>
					{#if user}
						<li>
							<a
								sveltekit:prefetch
								class={$page.url.pathname.includes('proposal') ? 'text-teal-700' : ''}
								href="/add/proposal">+Add new</a
							>
						</li>
					{/if}
				</ul>
			</div>
		</div>
		<div class="navbar-center">
			<a class="pl-1 btn btn-ghost normal-case text-xl hover:text-[#f5d018]" href="/">
				<div class="h-10 w-10">
					<Lottie lottiePath="/animations/lightning.json" />
				</div>
				{title}
			</a>
		</div>
		<div class="navbar-end">
			{#if user}
				<div class="flex gap-2">
					<a href="/user">{user}</a>
					<a href="/api/logout" class="link link-primary">logout</a>
				</div>
			{:else}
				<a href="/api/login" class="link link-primary">login</a>
			{/if}
		</div>
	</div>
</header>
