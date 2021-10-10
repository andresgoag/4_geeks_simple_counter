//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "./component/counter.jsx";

// Export functions

let startTime = Date.now();

let interval;

let lastActualSeconds = 0;

export const App = props => {
	return (
		<div>
			<Counter seconds={props.seconds} />

			<div className="options d-flex justify-content-center p-3">
				<button
					className="btn btn-lg btn-outline-danger mx-2"
					onClick={e => {
						clearInterval(interval);
						const time = Date.now();
						lastActualSeconds = Math.floor(
							(time - startTime) / 1000
						);
					}}>
					Stop
				</button>
				<button
					className="btn btn-lg btn-outline-success mx-2"
					onClick={() => {
						const time = Date.now();
						startTime = time - lastActualSeconds * 1000;
						clearInterval(interval);
						interval = setInterval(intervalFunction, 1000);
					}}>
					Resume
				</button>
				<button
					className="btn btn-lg btn-outline-dark mx-2"
					onClick={e => {
						startTime = Date.now();

						ReactDOM.render(
							<App seconds={0} />,
							document.querySelector("#app")
						);
						clearInterval(interval);
						interval = setInterval(intervalFunction, 1000);
					}}>
					Reset
				</button>
			</div>
		</div>
	);
};

App.propTypes = {
	seconds: PropTypes.number
};

const intervalFunction = () => {
	const currentTime = Date.now();
	const actualSeconds = Math.floor((currentTime - startTime) / 1000);

	ReactDOM.render(
		<App seconds={actualSeconds} />,
		document.querySelector("#app")
	);
};

interval = setInterval(intervalFunction, 1000);
