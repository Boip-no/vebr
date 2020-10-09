import React from 'react';
import Search from "./Search";
import MoreLessBtn from "./MoreLessBtn";
import { Accordion, Card, Button } from 'react-bootstrap';

function Work(){
    return(
            <div id="work">
                <h2>Work</h2>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Card.Header className="card__header">
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                <h3 className="work__name">Envo</h3>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="card__body">
                               <p> Envo AS, Barkåker — Programvareutvikler Juni 2018 - Nå Webutvikling. Opprettelse auto-genererte rapporter. Brannmur, intern og ekstern support, utforming av intern formell dokumentasjon (PP, EULA, Databehandleravtale, GDPR), prosessoptimalisering, integrering, oversettelser. Teknologier: C#, ASP.NET</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className="card__header">
                            <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                <h3 className="work__name">Visma Retail</h3>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="card__body">
                                <p>Visma Retail, Barkåker — Utvikler April 2017 - Desember 2017 Fast 20% stilling i Professional Services. Integrasjon mellom POS og ERP Teknologier: C#, .Net Core, XML, REST, JavaScript, HTML5, CSS3, JIRA.</p>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            <h2>Knowledge</h2>
                <Search />
                <Accordion defaultActiveKey="1">
                    <Card>
                        <Card.Header className="card__header">
                            <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                <h3 className="work__name">Languages</h3>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="3">
                            <Card.Body className="card__body">
                                <MoreLessBtn >See more</MoreLessBtn>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className="card__header">
                            <Accordion.Toggle as={Button} variant="link" eventKey="4">
                                <h3 className="work__name">Technology</h3>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body className="card__body">
                                <MoreLessBtn>See more</MoreLessBtn>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Card.Header className="card__header">
                            <Accordion.Toggle as={Button} variant="link" eventKey="5">
                                <h3 className="work__name">Utilities</h3>
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body className="card__body">
                                <MoreLessBtn>See more</MoreLessBtn>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion> 
            </div>
    )
}

export default Work;