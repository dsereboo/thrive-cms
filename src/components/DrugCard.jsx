import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/drugCard.css"
import { Card, Col,  } from "react-bootstrap"
// import image from "../assets/ibuprofen.jpeg"



const DrugCard=({drug})=>{


    // useEffect(
    //     ()=>{
    //         const storageRef = firebase.storage().ref();
    //         //3.
    //         const imageRef = storageRef.child(`${drug.Image}`);

    //         imageRef.getDownloadURL().then(
    //             (url)=>{setImage(url)}
    //         )
    //         // console.log(drug)
    //         // console.log(drug.Image)
    //     }
    //     ,[])

    return(
        <Col span={{md:3, offset:0}} className="flex-grow-0">
        <Card className="drug-card mt-2 mb-4" > 
           <Card.Img style={{borderRadius:"10px", borderBottomWidth:"2px", borderBottomColor:"black"}}  variant="top" src={drug.Image} width="200px" height="200px"/>
            <Card.Body>
                <Card.Title><Link to={`/drugs/${drug.id}`} className="stretched-link"></Link>{drug.Name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{drug.SerialNum}</Card.Subtitle>
                <Card.Text>Qty:{drug.Quantity}</Card.Text>
            </Card.Body>
        </Card> 
        </Col>   
    )
}


export default DrugCard