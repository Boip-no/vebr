import React from "react";
import { Accordion, Card, Button, Container } from 'react-bootstrap';
import Languages from "./Languages";
import Technologies from "./Technologies";
import Utilities from "./Utilities";

function Knowledge() {
    return(
        <>
            <h2>Knowledge</h2>
            <Container>
                <Accordion defaultActiveKey="1">
                    <Card className="card__header">
                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                            <h3 className="work__name">Languages</h3>
                        </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                        <Card.Body className="card__body">
                            <Languages />                    
                        </Card.Body>
                    </Accordion.Collapse>
                    </Card>
                    <Card className="card__header">
                            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                <h3 className="work__name">Technologies</h3>
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body className="card__body">
                                <Technologies />                    
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="card__header">
                        <Accordion.Toggle as={Button} variant="link" eventKey="5">
                            <h3 className="work__name">Utilities</h3>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body className="card__body">
                                <Utilities />                        
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion> 
            </Container>
        </>
    );
}

export default Knowledge;