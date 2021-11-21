import React from "react"
import "../stylesheets/homepage.css"
import { Container} from "react-bootstrap"
import CardRows from "../components/CardRows"
import Navigation from "../components/Navigation"
import SearchBar from "../components/SearchBar"
import FloatButton from "../components/FloatButton"

const Homepage=()=>{
    return(
        <Container fluid className="home-container" >
            <Navigation/>
            <SearchBar/>
            <CardRows/>
            {/* <SecondarySearch/> */}
            <FloatButton/>
        </Container>
    )
}

export default Homepage