import React from "react";
import { IconContext } from "react-icons";
import { BsFillCameraFill, BsSearch } from "react-icons/bs";
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
                            placeholder="Search"
                        />
                        <div className="input-group-append">
                            <Button variant="outline-secondary">
                                <IconContext.Provider value={{ size: "1.3em" }}>
                                    <BsFillCameraFill />
                                </IconContext.Provider>
                            </Button>
                            <Button variant="outline-secondary">
                                <BsSearch />
                            </Button>
                        </div>
                    </InputGroup>
                </Form.Group>
            </Form>
        </Container>
    );
};

export default SearchBar;
