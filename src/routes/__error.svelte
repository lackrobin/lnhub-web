<script context="module">
	export function load({ error, status }) {
		return {
			props: { message: error.message, status }
		};
	}
</script>

<script>
	export let message;
	export let status;
</script>

<div class="flex flex-col justify-center items-center p-2">
	<h1 class="font-bold text-2xl">
		{status}
	</h1>
	<p>{message}</p>
</div>
