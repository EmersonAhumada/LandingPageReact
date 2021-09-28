import React from "react";
import PropTypes from "prop-types";

export const Card1 = props => {
	return (
		<div className="card" style={{ width: "18rem" }}>
			<img src={props.imagen} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};

Card1.propTypes = {
	imagen: PropTypes.text,
	title: PropTypes.text,
	text: PropTypes.text
};
