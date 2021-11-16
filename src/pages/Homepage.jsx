import React from "react"
import { Container, Row } from "react-bootstrap"
import CardRows from "../components/CardRows"
import DrugCard from "../components/DrugCard"
import Navigation from "../components/Navigation"
import SearchBar from "../components/SearchBar"
import SecondarySearch from "../components/SecondarySearch"
import UploadButton from "../components/UploadButton"

const Homepage=()=>{
    return(
        <Container fluid style={{backgroundColor:"#F8F8F8"}}>
            <Navigation/>
            <SearchBar/>
            <CardRows/>
            {/* <SecondarySearch/> */}
        </Container>
    )
}

export default Homepage