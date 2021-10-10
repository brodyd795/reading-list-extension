/*global chrome*/

export async function addToReadingList() {
	let success = true;

	await chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		const url = tabs[0].url;
		const key = process.env.REACT_APP_API_SECRET;

		fetch("http://localhost:3000/api/controllers/reading-list", {
			method: "POST",
			body: JSON.stringify({ url, key }),
		}).catch(() => {
			success = false;
		});
	});

	return success;
}
