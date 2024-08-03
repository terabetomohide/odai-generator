import { genre as genreList } from '$lib/genre';
import { list as allList } from '$lib/data';

export const load = async ({ params }) => {
	const genreName = params.genre;
	const genre = genreList.find((item) => item.name === genreName);
	const list = genre ? allList[genre.name] : [];
	return {
		genre,
		list,
		params
	};
};