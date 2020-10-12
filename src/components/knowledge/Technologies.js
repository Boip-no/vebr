import React from 'react';
import { Row, Col } from 'react-bootstrap';
import technologies from '../../constants/technologies';

function Technologies() {
    return( 
        <Row className="knowledge">
            {technologies.map((tech, index) =>
                <Col md={12} key={index}>
                    <h5>    {tech.name} {tech.skill}    </h5>
                </Col>
            )}
        </Row>
    );

}

export default Technologies;