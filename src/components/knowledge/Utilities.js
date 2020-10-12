import React from "react";
import { Col, Row } from "react-bootstrap";
import utilities from "../../constants/utilities";

function Utilities() {
    return(
        <Row className="knowledge">
            {utilities.map((utilitie, index) => 
                <>
                    <Col className="knowledge--body" md={8} key={index}>
                        <h5>{utilitie.name}</h5>
                    </Col>
                    <Col md={4}>
                        <h5>{utilitie.skill}</h5>
                    </Col>
                </>
            )}
        </Row>
    );
}

export default Utilities;