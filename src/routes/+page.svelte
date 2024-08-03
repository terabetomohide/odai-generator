<script lang="ts">
	import GenreSelector from '$lib/GenreSelector.svelte';
</script>

<main>
	<h1>お題を出すジャンルを選んでください</h1>

	<div>
		<GenreSelector
		/>
	</div>
</main>

<style>
    main {
        padding: 1rem;
        height: 100vh;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    h1 {
        font-size: 1.1rem;
        margin: -2em 1em 2em;
        color: #333;
    }
</style>
