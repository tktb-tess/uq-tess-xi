import type { WordData } from "./api/v0/today-word/+server";
import type { SwadeshList } from "./api/v0/swadesh-list/+server";

const todayWordFunc = async (): Promise<WordData> => {
	const url = '/api/v0/today-word';
	const response = await fetch(url);

	if (!response.ok) {
		return {
			is_success: false,
			status: response.status,
			message: response.statusText
		};
	}

	// await new Promise<void>((resolve) => {
	// 	setTimeout(resolve, 2000);
	// });

	return response.json();
};

const swadeshF = async (): Promise<SwadeshList> => {
	const url = '/api/v0/swadesh-list';
	const resp = await fetch(url);

	if (!resp.ok) {
		return {
			success: false,
			status: resp.status,
			message: resp.statusText
		}
	}

	return await resp.json();
};

const todayWordProm = $state({
	value: todayWordFunc()
});

const swadeshListProm = $state({
	value: swadeshF()
})

export { todayWordProm, swadeshListProm };
