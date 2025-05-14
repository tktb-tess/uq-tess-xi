import type { WordData } from "./api/v0/today-word/+server";

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

const globalStates = $state({
	todayWordProm: todayWordFunc()
});

export default globalStates;
