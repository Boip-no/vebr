import React from 'react';
import { BiRadioCircleMarked, BiRadioCircle } from "react-icons/bi";
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
{
    // if-else statement 
} 
                    <h4> {
                        tech.skill > 0 ?  <BiRadioCircleMarked /> : <BiRadioCircle />}
                        {tech.skill > 1 ? <BiRadioCircleMarked /> : <BiRadioCircle />}
                        {tech.skill > 2 ? <BiRadioCircleMarked /> : <BiRadioCircle />}
                        {tech.skill > 3 ? <BiRadioCircleMarked /> : <BiRadioCircle />}
                        {tech.skill > 4 ? <BiRadioCircleMarked /> : <BiRadioCircle />
                    }</h4>
                    </Col>
                </>
                )}
        </Row>
    );

}

export default Technologies;