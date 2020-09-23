import React from "react";
import PropTypes from "prop-types";

function Heading({ title }) {
	return <h1>{title}</h1>;
}

Heading.propTypes = {
	title: PropTypes.node.isRequired
};

export default Heading;