<script lang="ts">
import {genre} from '$lib/genre';
</script>

<div>
	<ul>
		{#each genre as {
			name,label
		}}
			<li>
				<a
					href="/genre/{name}"
				>{label}</a>
			</li>
		{/each}
	</ul>
</div>