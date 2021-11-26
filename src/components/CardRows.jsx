import React,{useEffect, useState} from "react";
import { Row,Container} from "react-bootstrap";
import { connect } from "react-redux";
import { getDrugs } from "../redux/actions/drugActions";
import DrugCard from "./DrugCard";
import "../stylesheets/searchBar.css";
import {Form,InputGroup,FormControl,Button,} from "react-bootstrap";
import Fuse from 'fuse.js'
import "../stylesheets/homepage.css"

const CardRows=(props)=>{

    const [search,setSearch]=useState(false)
    const[searchItems, setSearchItems]=useState(null)
    useEffect(
        ()=>{
          props.getDrugs()
          setItems(props.drugs)
        },[props]  
    )

    const [items, setItems]=useState(props.drugs)

  //   useEffect(
  //     ()=>{
  //     //  console.log(items,"items")
  //     },[props,items]  
  //  )

    const getResult=(result)=>{
      setSearch(true)
      console.log(result,"result")
      setSearchItems(result)
      console.log(searchItems,"searchItems")
      //  setItems(result.item)
      //  console.log(items)
    }
   

   
   

    return (
      <Container >
        <Row>
          <SearchBar getResult={getResult} drugs={props.drugs} />
        </Row>
        <Row >
          {
            search ? (
              // <h1>Hello</h1>
             searchItems.map((drug) => (
               <DrugCard drug={drug.item} key={drug.item.id} />
             ))
            ) : (
              items.map((drug) => <DrugCard drug={drug} key={drug.id} />)
            )

          }
        </Row>
      </Container>
    );
}

const mapStateToProps=(state)=>{
   return{drugs:state.drugs.drugs}
}


const mapDispatchToProps={
    getDrugs:getDrugs
}

export default connect(mapStateToProps, mapDispatchToProps)(CardRows)


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
        "Category"
       
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
      props.getResult(result)

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