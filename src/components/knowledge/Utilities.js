import React from "react";
import { Col, Row } from "react-bootstrap";
import utilities from "../../constants/utilities";

function Utilities() {
    return(
        <Row className="knowledge">
            {utilities.map((utilitie, indexUti) => 
                <Col md={12} key={indexUti}>
                    <h5>    {utilitie.name} {utilitie.skill}    </h5>
                </Col>
            )}
        </Row>
    );
}

export default Utilities;