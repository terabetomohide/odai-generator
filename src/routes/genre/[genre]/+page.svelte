<script lang="ts">
	import type { GenreItem } from '$lib/genre';
	import type { OdaiData } from '$lib/data';

	export let data: {
		genre: GenreItem
		list: OdaiData[]
	};

	function random(max: number) {
		return Math.floor(Math.random() * max) ;
	}

	const indexList: number[] = [];

	const count = data.list.length;
	let currentIndex: number = random(count);

	function updateList() {
		let randomIndex = random(count);

		// 連続して同じ値にならないように直近20個の値の重複をチェック
		while (indexList.length && indexList.slice(0, 20).includes(randomIndex)){
			randomIndex = random(count);
		}
		currentIndex = randomIndex;
		indexList.push(randomIndex)
		console.log(indexList);
	}


</script>

<div>
	<a href="/">
		戻る
	</a>
	<h1>
		{data.genre.label}
	</h1>
	<p>
		{data.list[currentIndex]?.value}
	</p>
	<button
	on:click={()=>updateList()}
	>
		次のお題
	</button>
</div>