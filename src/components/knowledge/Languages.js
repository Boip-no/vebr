import React from 'react';
import languages from '../../constants/languages';
import { BiRadioCircleMarked, BiRadioCircle } from "react-icons/bi";
import { Row, Col } from 'react-bootstrap';

function Languages() {
    return( 
    <>
        {languages.map((language, index) => 
            <Row className="knowledge" key={index}>
                <Col className="knowledge--body" md={8}>
                    <h5>    {language.name}   </h5>
                </Col>
                <Col md={4}> 
                    <h3>
                        {language.skill > 0 ? <BiRadioCircleMarked /> : <BiRadioCircle />}
                        {language.skill > 1 ? <BiRadioCircleMarked /> : <BiRadioCircle />}
                        {language.skill > 2 ? <BiRadioCircleMarked /> : <BiRadioCircle />}
                        {language.skill > 3 ? <BiRadioCircleMarked /> : <BiRadioCircle />}
                        {language.skill > 4 ? <BiRadioCircleMarked /> : <BiRadioCircle />} 
                    </h3>
                </Col>
            </Row>
        )}
    </>
    );
}

export default Languages;