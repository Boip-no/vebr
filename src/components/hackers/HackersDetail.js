import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { HACKERS_URL } from "../../constants/api";

function HackersDetail() {
    const [detail, setDetail] = useState (null);
    const [loading, setLoading] = useState(true);

    let { id } = useParams();
    const url = HACKERS_URL + id;

    useEffect(() => {
    fetch(url) 
        .then(response => response.json())
        .then(json => setDetail(json))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }, );

    if (loading) {
        return <Spinner animation="border" className="Spinner" />
    }

    return (
        <Row>
            <Col md={6} className="detail-image">
                <Image src={detail.image} roundedCircle />
            </Col>
            <Col>
                <h1>{detail.name}</h1>
                <p>
                    <b>Gender:</b> {detail.gender}
                </p>
                <p>
                    <b>Species:</b> {detail.species}
                </p>
                <p>
                    <b>Status:</b> {detail.status}
                </p>
            </Col>
        </Row>
    );
}

export default HackersDetail;