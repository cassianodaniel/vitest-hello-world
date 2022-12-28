<script>
// @ts-nocheck

	import { onMount } from 'svelte';
	let result = 0;
	onMount(async () => {
		const sum = await import('$lib/helpers/sum.ts').then((f) => f.default);
		result = sum(1, 2);
	});
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>Result of onMount sum: {result}</div>
