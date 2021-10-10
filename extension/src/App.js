import React, { useEffect, useState } from "react";
import dotenv from "dotenv";

import "./App.css";
import { addToReadingList } from "./main";

dotenv.config();

const App = () => {
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		addToReadingList().then((wasSuccessful) => {
			setSuccess(wasSuccessful);
		});
	}, []);

	const text = success
		? "Item added to reading list!"
		: "There was an error adding this item to your reading list. Please try again.";

	return <div id={"text"}>{text}</div>;
};

export default App;
