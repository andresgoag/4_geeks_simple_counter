import React from "react";

export const Menu = () => {
	return (
		<div>
			<button className="btn btn-primary" onClick={countFromZero}>
				Count from 0
			</button>
			<button className="btn btn-warning" onClick={countFromZero}>
				Count from number
			</button>
			<input type="number" />
		</div>
	);
};
