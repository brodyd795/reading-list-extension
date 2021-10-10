import React, { useEffect, useState } from "react";
import dotenv from "dotenv";

import { addToReadingList } from "./main";

dotenv.config();

const App = () => {
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		addToReadingList().then((wasSuccessful) => {
			setSuccess(wasSuccessful);
		});
	}, []);

	return (
		<div>
			{success
				? "Item added to reading list"
				: "There was an error adding this item to your reading list. Please try again."}
		</div>
	);
};

export default App;
