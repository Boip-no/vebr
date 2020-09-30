import React from "react";
import PropTypes from "prop-types";

function Heading({ title, subtitle }) {
	return (
		<>
		<h1>{title}</h1>
		<h5>{subtitle}</h5>
		</>
	);
}

Heading.propTypes = {
	title: PropTypes.node.isRequired
};

export default Heading;