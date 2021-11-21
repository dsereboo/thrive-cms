import React from "react";
import "../stylesheets/searchBar.css";
import {Form,InputGroup,FormControl,Container,Button,} from "react-bootstrap";

const SearchBar = () => {
    return (
        <Container className="searchBar-container">
            <Form>
                <Form.Group>
                    <InputGroup>
                        <FormControl
                            size="lg"
                            id="inlineFormInputGroup"
                            placeholder="Enter name of drug"
                            className="form-outline"
                        />
                        <div className="input-group-append" style={{borderRadius:"0.7rem"}}>
                            <Button variant="dark" size="lg" >
                               Search
                            </Button>
                            
                        </div>
                    </InputGroup>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default SearchBar;
