import React from 'react';
import { Row, Col } from 'react-bootstrap';
import technologies from '../../constants/technologies';

function Technologies() {
    return( 
        <Row className="knowledge">
            {technologies.map((tech, index) =>
                <>
                    <Col className="knowledge--body" md={8} key={index}>
                        <h5>    {tech.name}   </h5>
                    </Col>
                    <Col md={4}>
                        <h5>     {tech.skill}   </h5>
                    </Col>
                </>
                )}
        </Row>
    );

}

export default Technologies;