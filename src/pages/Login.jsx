import React from "react";
import "../stylesheets/login.css";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import image from "../assets/login.png";


const Login = () => {

    const handelClick=()=>{

    }


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
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-4" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button onClick={handelClick} variant="primary" size="lg" className="w-100 login-button">
                Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
