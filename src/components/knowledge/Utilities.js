import React from "react";
import { BiRadioCircleMarked, BiRadioCircle } from "react-icons/bi";
import { Col, Row } from "react-bootstrap";
import utilities from "../../constants/utilities";

function Utilities() {
    return(
        <Row className="knowledge">
            {utilities.map((utility, index) => 
                <>
                    <Col className="knowledge--body" md={8} key={index}>
                        <h5>{utility.name}</h5>
                    </Col>
                    <Col md={4}>
{
    // if-else statement 
}   
                    <h4>{
                        utility.skill > 0 ?  <BiRadioCircleMarked /> : <BiRadioCircle />}
                        {utility.skill > 1 ? <BiRadioCircleMarked /> : <BiRadioCircle />}
                        {utility.skill > 2 ? <BiRadioCircleMarked /> : <BiRadioCircle />}
                        {utility.skill > 3 ? <BiRadioCircleMarked /> : <BiRadioCircle />}
                        {utility.skill > 4 ? <BiRadioCircleMarked /> : <BiRadioCircle />
                    } </h4>
                    </Col>
                </>
            )}
        </Row>
    );
}

export default Utilities;