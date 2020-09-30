import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function Search() {
    return (
        <InputGroup className="search">
            <FormControl
                placeholder="Search for skills..." onChange={event => (event)}/>
        </InputGroup>
    );

};

export default Search;