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
			{success ? (
				<div>
					<div>Item added to reading list!</div>
				</div>
			) : (
				<div>
					There was an error adding this item to your reading list. Please try
					again.
				</div>
			)}
		</div>
	);
};

export default App;
