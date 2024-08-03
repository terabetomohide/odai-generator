<script lang="ts">
	import { genre } from '$lib/genre';
</script>

<div>
	<ul>
		{#each genre as {
			name, label
		}}
			<li>
				<a
					href="/genre/{name}"
				>{label}</a>
			</li>
		{/each}
	</ul>
</div>

<style>
    ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style: none;
        flex-direction: column;
        text-align: center;
				overflow: hidden;
				gap: 3px;
        border-radius: 10px;
    }

    li {
        margin: 0;
        display: block;
    }

    a {
        text-decoration: none;
        color: #444;
        display: block;
        padding: 0.5em 1em;
        background-color: #eee;
				min-width: 200px;
				letter-spacing: 0.2em;
    }
</style>