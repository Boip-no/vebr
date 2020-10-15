import React from "react";
import PropTypes from "prop-types";

function HeaderContainer({ title, subtitle }) {
	
	return (
		<> 
			<h1>{title}</h1>
				<h3>{subtitle}</h3>
		</>
	);
}

HeaderContainer.propTypes = {
	title: PropTypes.node.isRequired
};

export default HeaderContainer