import React from 'react';
import languages from '../../constants/languages';
import { BiRadioCircleMarked, BiRadioCircle } from "react-icons/bi";
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
{
    // if-else statement 
} 
                <h3>{
                    language.skill > 0 ? <BiRadioCircleMarked /> 
                    : <BiRadioCircle />}
                    {language.skill > 1 ? <BiRadioCircleMarked /> : <BiRadioCircle />}
                    {language.skill > 2 ? <BiRadioCircleMarked /> : <BiRadioCircle />}
                    {language.skill > 3 ? <BiRadioCircleMarked /> : <BiRadioCircle />}
                    {language.skill > 4 ? <BiRadioCircleMarked /> : <BiRadioCircle />
                } </h3>
                </Col>
            </>
            )}
        </Row>
    );

}

export default Languages;