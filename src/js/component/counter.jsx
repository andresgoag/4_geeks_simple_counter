import React from "react";
import PropTypes from "prop-types";
import { Numb } from "./secondsCounter.jsx";

//include images into your bundle

//create your first component
export const Counter = props => {
	const seconds = props.seconds;
	const stringSeconds = seconds.toString().padStart(6, "0");
	const secondsArray = stringSeconds.split("");

	return (
		<div className="container-fluid mt-5 d-flex flex-column align-items-center justify-content-center">
			<div className="counter">
				<div className="number-container">
					<p className="number ">
						<i className="far fa-clock"></i>
					</p>
				</div>

				{secondsArray.map((item, index) => {
					return <Numb number={item} key={index} />;
				})}
			</div>
		</div>
	);
};

Counter.propTypes = {
	seconds: PropTypes.number
};
