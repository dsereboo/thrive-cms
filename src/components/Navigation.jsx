import React from "react"
import { connect } from "react-redux"
import { Navbar,Nav,NavDropdown, Button, Dropdown, Container } from "react-bootstrap"
import { signOut } from "../redux/actions/authActions"

const Navigation=(props)=>{
    
  const handleClick=()=>{
    props.signOut()
  }

    return (
      <Container>
        <Navbar collapseOnSelect expand="lg" bg="#fff" variant="light">
          <Navbar.Brand href="#home">Thrive Pharma</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">Description</Nav.Link>
              <Nav.Link href="#pharmacy">Pharmacy</Nav.Link>
              <Nav.Link href="#link">
                  <Button onClick={handleClick} variant="primary" >Logout</Button>                              
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
}

const mapDispatchToProps={
  signOut:signOut
}

export default connect(null,mapDispatchToProps)(Navigation)