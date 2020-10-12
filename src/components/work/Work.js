import React from 'react';
import { Accordion, Card, Button, Container } from 'react-bootstrap';

function Work(){
    return(
            <div id="work">
                <h2>Work</h2>
                    <Container>
                    <Accordion defaultActiveKey="0">
                        <Card className="card__header">
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <h3 className="work__name">Envo</h3>
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="card__body">
                            <p> Envo AS, Barkåker — Programvareutvikler Juni 2018 - Nå Webutvikling. Opprettelse auto-genererte rapporter. Brannmur, intern og ekstern support, utforming av intern formell dokumentasjon (PP, EULA, Databehandleravtale, GDPR), prosessoptimalisering, integrering, oversettelser. Teknologier: C#, ASP.NET</p>
                            </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                        <Card className="card__header">
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                <h3 className="work__name">Visma Retail</h3>
                            </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="card__body">
                                <p>Visma Retail, Barkåker — Utvikler April 2017 - Desember 2017 Fast 20% stilling i Professional Services. Integrasjon mellom POS og ERP Teknologier: C#, .Net Core, XML, REST, JavaScript, HTML5, CSS3, JIRA.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </Container>
            </div>
    );
}

export default Work;