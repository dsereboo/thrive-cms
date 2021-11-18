import React from "react"
import { connect } from "react-redux"
import Avatar from "react-avatar"
import { Navbar,Nav, Button, Container,Dropdown } from "react-bootstrap"
import { signOut } from "../redux/actions/authActions"

const Navigation=(props)=>{
    
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href="#link"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

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
              <Nav.Link href="#pricing">Prescriptions</Nav.Link>
              <Nav.Link href="#pharmacy">Pharmacy</Nav.Link>
              <Nav.Link>Dashboard</Nav.Link>
              <Dropdown className="ml-4 dropdown-menu-end" align="end" id="dropdown-menu-align-left" >
                <Dropdown.Toggle as={CustomToggle}>
                  <Avatar
                    data-toggle="dropdown"
                    name="Avater"
                    size="40"
                    round={true}
                  />
                </Dropdown.Toggle>

                <Dropdown.Menu drop="down">
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item>
                    <Button variant="default" onClick={handleClick}>
                      Logout
                    </Button>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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