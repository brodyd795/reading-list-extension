import dotenv from "dotenv";

import "./App.css";
import { changeColor } from "./main";

dotenv.config();

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<button onClick={changeColor}>Change color</button>
			</header>
		</div>
	);
}

export default App;
