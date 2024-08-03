<script lang="ts">
	import type { GenreItem } from '$lib/genre';
	import type { OdaiData } from '$lib/data';

	export let data: {
		genre: GenreItem
		list: OdaiData[]
	};

	function random(max: number) {
		return Math.floor(Math.random() * max);
	}

	const indexList: number[] = [];

	const count = data.list.length;
	let currentIndex: number = random(count);

	function updateCurrentIndex() {
		let randomIndex = random(count);

		// 連続して同じ値にならないように直近20個の値の重複をチェック
		while (indexList.length && indexList.slice(-20).includes(randomIndex)) {
			randomIndex = random(count);
		}
		currentIndex = randomIndex;
		indexList.push(randomIndex);
	}


</script>

<main>
	<a class="back" href="/">
		戻る
	</a>
	<small>ジャンル</small>
	<h1>
		{data.genre.label}
	</h1>
	<p>
		{data.list[currentIndex]?.value}
	</p>
	<button class="next" on:click={()=>updateCurrentIndex()}>
		次のお題
	</button>
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

    small {
        margin-top: 1em;
    }

    h1 {
        margin: 1em;
        color: #333;
        font-size: 1rem;
    }

    p {
        font-size: 2rem;
        letter-spacing: 0.1em;
        margin: 2em 0;
        text-shadow: #eee 0 3px 3px;
    }

    .back {
        margin-top: -1rem;
        text-decoration: none;
        color: #fff;
        display: block;
        background: #999;
        width: 70px;
        height: 70px;
        border-radius: 35px;
        line-height: 70px;
        text-align: center;
        font-size: 0.8em;
    }

    .next {
        margin-top: 2rem;
        text-decoration: none;
        color: #fff;
        display: block;
        background: #222;
        width: 100px;
        height: 100px;
        border-radius: 50px;
        line-height: 100px;
        text-align: center;
        border: none;
    }

</style>