import React from "react"
import { Container} from "react-bootstrap"
import CardRows from "../components/CardRows"
import Navigation from "../components/Navigation"
import SearchBar from "../components/SearchBar"

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