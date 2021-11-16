import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/drugCard.css"
import { Card, Col,  } from "react-bootstrap"
import image from "../assets/ibuprofen.jpeg"

const DrugCard=({drug})=>{
    return(
        <Col span={{md:3}}>
        <Card className="drug-card mt-2 mb-4" > 
           <Card.Img  variant="top" src={image} width="200px" height="200px"/>
            <Card.Body>
                <Card.Title>{drug.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{drug.serialNum}</Card.Subtitle>
                <Card.Text>Qty:{drug.qty}</Card.Text>
            </Card.Body>
        </Card> 
        </Col>   
    )
}

export default DrugCard