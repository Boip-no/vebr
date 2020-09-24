import React from 'react';
import { Accordion, Card, Container, Button } from 'react-bootstrap';

function Work(){
    return(
        <Container id="work">
            <div>
                <h3>Work</h3>
                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header className="card__header">
                                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                    Envo
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body className="card__body">
                                    Envo AS, Barkåker — Programvareutvikler Juni 2018 - Nå Webutvikling. Opprettelse auto-genererte rapporter. Brannmur, intern og ekstern support, utforming av intern formell dokumentasjon (PP, EULA, Databehandleravtale, GDPR), prosessoptimalisering, integrering, oversettelser. Teknologier: C#, ASP.NET
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header className="card__header">
                                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                    Visma Rital
                                </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                                <Card.Body className="card__body">
                                    Visma Retail, Barkåker — Utvikler April 2017 - Desember 2017 Fast 20% stilling i Professional Services. Integrasjon mellom POS og ERP Teknologier: C#, .Net Core, XML, REST, JavaScript, HTML5, CSS3, JIRA.
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                <h3>Knowledge</h3>
                    <Accordion defaultActiveKey="1">
                            <Card>
                                <Card.Header className="card__header">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                        Languages
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="3">
                                    <Card.Body className="card__body">
                                        <p className="card__body--p">Envo</p>
                                        <p className="card__body--p">Envo</p>
                                        <p className="card__body--p">Envo</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header className="card__header">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                        Tech
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="4">
                                    <Card.Body className="card__body">
                                        <p className="card__body--p">Envo</p>
                                        <p className="card__body--p">Envo</p>
                                        <p className="card__body--p">Envo</p>
                                    </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            <Card>
                                <Card.Header className="card__header">
                                    <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                        Utilities
                                    </Accordion.Toggle>
                                </Card.Header>
                                <Accordion.Collapse eventKey="5">
                                    <Card.Body className="card__body">
                                        <p className="card__body--p">JIRA</p>
                                        <p className="card__body--p">Envo</p>
                                        <p className="card__body--p">Envo</p>
                                    </Card.Body>
                                    
                                </Accordion.Collapse>
                            </Card>
                        </Accordion>
            </div>
        </Container>
    )
}

export default Work;