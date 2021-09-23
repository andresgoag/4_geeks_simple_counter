import React from "react";
import PropTypes from "prop-types";

export const Numb = props => {
	return (
		<div className="number-container">
			<p className="number">{props.number}</p>
		</div>
	);
};

Numb.propTypes = { number: PropTypes.number };
