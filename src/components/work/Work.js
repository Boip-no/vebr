import React from 'react';
import Container from "react-bootstrap/Container";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Work(){
    return(
        <Container id="work">
            <div>
                <h3>Work</h3>
                
                <section>Envo
                    <section></section>
                </section>
                <section>Visma Retail
                    <section></section>
                </section>
            </div>

            <div>
                <h3>Knowledge</h3>
                <div className="mb-2">
                    {['down'].map((direction) => (
                    <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        variant="secondary"
                        title={` Drop ${direction} `}
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
                    ))}
                </div>
                <DropdownButton id="dropdown-item-button" className="secondary" title="Languages">
                    <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                    <Dropdown.Item as="button">Action</Dropdown.Item>
                    <Dropdown.Item as="button">Another action</Dropdown.Item>
                    <Dropdown.Item as="button">Something else</Dropdown.Item>
                </DropdownButton>
                <section>
                    <section></section>
                </section>
                <section>Tech
                    <section></section>
                </section>
                <section>Utilities
                    <section></section>
                </section>
            </div>
        </Container>
    )
}

export default Work;