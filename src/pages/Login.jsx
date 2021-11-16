import React, { useState } from "react";
import { Redirect } from "react-router";
import "../stylesheets/login.css";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import image from "../assets/login.png";
import { connect } from "react-redux";
import { signIn } from "../redux/actions/authActions";

const Login = (props) => {

    const [details,setDetails]=useState({email:"", password:""})

    const handleChange=(event)=>{
      setDetails({...details, [event.target.name]:event.target.value})
    }

    const handelClick=(event)=>{
      event.preventDefault()
      props.signIn(details.email,details.password)
    }

    // if(!props.auth.isLoaded){
    //   return (<h1>Page is loading!...</h1>)
    // }
  
  
    // if( props.auth.isLoaded && !props.auth.isEmpty){
    //   return (
    //     <Redirect to="/" />
    //   )
    // }


  return (
    <Container fluid>
      <Row className="vh-100">
        <Col md={{ span: 7 }} className="illustration pt-5">
          <h1 className="thrive-logo">Thrive Logo</h1>
          <img src="https://firebasestorage.googleapis.com/v0/b/thrive-cms-deff4.appspot.com/o/Drawkit-Vector-Illustration-Medical-18.png?alt=media&token=737a8137-ca6e-479e-8e49-25169410e0e0" className="img-fluid align-middle" />
          <div className="text-center">
            <p className="description">Your No. 1 Care partner</p>
          </div>
        </Col>
        <Col md={{ span: 5 }} className="pl-5 pr-5 login-form ">
          <Form>
          <h1>Thrive Pharmacy</h1>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="text" placeholder="Enter email" onChange={handleChange} name="email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={handleChange} name="password" />
            </Form.Group>
            <Button onClick={handelClick} type="submit" variant="primary" size="lg" className="w-100 login-button">
                Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

const mapDispatchToProps={
    signIn:signIn
}

const mapStateToProps=(state)=>{
   return{auth: state.firebase.auth}
}

export default  connect(mapStateToProps, mapDispatchToProps)(Login);
