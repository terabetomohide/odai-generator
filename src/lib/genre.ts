export type GenreItem = {
	name: GenreType
	label: string
}

export const genre:GenreItem[] = [
	{
		name: 'shiritori',
		label: 'しりとり'
	},
	{
		name: 'gesture',
		label: 'ジェスチャー'
	},
	{
		name: 'quiz',
		label: 'クイズ'
	},
	{
		name: 'yamanote',
		label: '山手線ゲーム'
	},
	{
		name: 'freeTalk',
		label: 'フリートーク'
	}

] as const

// genreの配列の文字列から型を作成
export type GenreType = 'shiritori' | 'gesture' | 'quiz' | 'yamanote' | 'freeTalk'
