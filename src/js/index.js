//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "./component/counter.jsx";

// Export functions

const startTime = Date.now();

setInterval(() => {
	const currentTime = Date.now();
	const actualSeconds = Math.floor((currentTime - startTime) / 1000);
	ReactDOM.render(
		<Counter seconds={actualSeconds} />,
		document.querySelector("#app")
	);
}, 1000);
