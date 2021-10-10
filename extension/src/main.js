/*global chrome*/

export async function addToReadingList() {
	try {
		await chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
			console.log("adding to reading list: ", tabs[0].url);
		});
		return true;
	} catch (error) {
		return false;
	}
}
