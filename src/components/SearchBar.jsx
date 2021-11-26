import React, { useState } from "react";
import "../stylesheets/searchBar.css";
import {Form,InputGroup,FormControl,Container,Button,} from "react-bootstrap";
import Fuse from 'fuse.js'

const SearchBar = (props) => {

    const drugs=props.drugs

    const options = {
        isCaseSensitive: false,
        // includeScore: false,
        // shouldSort: true,
        // includeMatches: false,
        findAllMatches: false,
        minMatchCharLength: 1,
        location: 0,
        threshold: 0.6,
        // distance: 100,
        useExtendedSearch: false,
        // ignoreLocation: false,
        // ignoreFieldNorm: false,
        keys: [
          "Name",
         
        ]
      };
  
    const fuse = new Fuse(props.drugs,options)
    const [details,setDetails]=useState({search:""})

    const handleChange=(event)=>{
        setDetails({...details, [event.target.name]: event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        const result=fuse.search(details.search)
        console.log(result)

    }

    // console.log(details)

    return (
        <Container className="searchBar-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <InputGroup>
                        <FormControl
                            size="lg"
                            id="inlineFormInputGroup"
                            placeholder="Enter name of drug"
                            className="form-outline"
                            name="search"
                            onChange={handleChange}
                        />
                        <div className="input-group-append" style={{borderRadius:"0.7rem"}}>
                            <Button variant="dark" size="lg" type="submit" >
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
