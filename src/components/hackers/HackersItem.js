import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function HackersItem({ id, name, image }) {
    return (
        <Card>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Link to={"character/" + id}>
                    <Button variant="secondary" block>
                        View
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    ); 
}

HackersItem.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
};


export default HackersItem;