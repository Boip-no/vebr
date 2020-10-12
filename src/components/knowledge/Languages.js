import React from 'react';
import languages from '../../constants/languages';
import { Row, Col } from 'react-bootstrap';

function Languages() {
    return( 
        <Row className="knowledge">
            {languages.map((language, indexName) => 
                <Col md={12} key={indexName}>
                    <h5>    {language.name} {language.skill}    </h5>
                </Col>
            )}
        </Row>
    );

}

export default Languages;