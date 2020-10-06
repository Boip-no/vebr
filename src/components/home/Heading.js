import React from "react";
import PropTypes from "prop-types";

function Heading({ title, subtitle }) {
	return (
		<>
		<h1>{title}</h1>
		<h3>{subtitle}</h3>
		</>
	);
}

Heading.propTypes = {
	title: PropTypes.node.isRequired
};

export default Heading;