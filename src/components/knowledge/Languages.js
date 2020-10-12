import React from 'react';
import languages from '../../constants/languages';
// import Skill from "./Skill";
import { Row, Col } from 'react-bootstrap';

function Languages() {
    return( 
        <Row className="knowledge">
            {languages.map((language, index) => 
            <>
                <Col className="knowledge--body" md={8} key={index}>
                    <h5>    {language.name}   </h5>
                </Col>
                <Col md={4}>
                    {/* <Skill /> */}
                    {language.skill}
                </Col>
            </>
            )}
        </Row>
    );

}

export default Languages;