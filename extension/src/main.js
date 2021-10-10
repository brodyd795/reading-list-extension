/*global chrome*/

export async function addToReadingList() {
	try {
		await chrome.tabs.query({ active: true, currentWindow: true }, (r) => {
			console.log("adding to reading list: ", r[0].url);
		});
		return true;
	} catch (error) {
		console.log(`error`, error);
		return false;
	}
}
