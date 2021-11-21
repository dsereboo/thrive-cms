import React from "react"
import "../stylesheets/homepage.css"
import { Container} from "react-bootstrap"
import CardRows from "../components/CardRows"
import Navigation from "../components/Navigation"
import SearchBar from "../components/SearchBar"

const Homepage=()=>{
    return(
        <Container fluid className="home-container vh-100" >
            <Navigation/>
            <SearchBar/>
            <CardRows/>
            {/* <SecondarySearch/> */}
        </Container>
    )
}

export default Homepage