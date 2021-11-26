import React from "react"
import "../stylesheets/homepage.css"
import { Container} from "react-bootstrap"
import CardRows from "../components/CardRows"
import Navigation from "../components/Navigation"
import FloatButton from "../components/FloatButton"
import { connect } from "react-redux"

const Homepage=(props)=>{
    return(
        <Container fluid  >
            <Navigation/>
            {/* <SearchBar drugs={props.drugs}/> */}
            <CardRows/>
            {/* <SecondarySearch/> */}
            <FloatButton/>
        </Container>
    )
}

const mapStateToProps=(state)=>{
    return{drugs:state.drugs.drugs}
}
export default connect(mapStateToProps,null) (Homepage)