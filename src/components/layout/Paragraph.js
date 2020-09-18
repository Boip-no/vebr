import React from "react";
import PropTypes from "prop-types";

function Paragraph({ children }) {
	return <p>{children}</p>;
}

Paragraph.propTypes = {
	children: PropTypes.node.isRequired
};

export default Paragraph;