import React, { useEffect, useState } from "react";
import "../stylesheets/drugPage.css"
import { Container, Row,Col, ButtonGroup } from "react-bootstrap";
import { useParams } from "react-router";
import image from "../assets/ibuprofen.jpeg"
import Navigation from "./Navigation";
import DeleteButton from "./DeleteButton";
// import LocateButton from "./LocateButton";
// import OrderButton from "./OrderButton";
// import EditButton from "./EditButton";
import { connect } from "react-redux";



const DrugPage=(props)=>{

    //Access id of drug passed
    const{id}=useParams()

    const[chosenDrug,setChosenDrug]=useState({})
    const findDrug=()=>{
        let drug=(props.drugs.filter((item)=>item.id===id))
        setChosenDrug(drug[0])
    }

    useEffect(findDrug)

    return(
        <>
        <Navigation/>
        <Container className="vh-100">
            <Row  >
                <Col md={{span:5}} className="vh-100">
                    <img src={image} className="img-fluid drug-image mt-5" alt="medicine identifier"/>
                </Col>
                <Col md={{span:5, }} className="mt-5">
                    <div>
                    <h1>{chosenDrug.Name}</h1>
                        <p className="mb-2 text-muted">{chosenDrug.SerialNum}</p>
                     <hr/>
                    </div>
                    <div>
                        <p className="font-weight-bold text-nowrap">Available:</p><p>{chosenDrug.IsAvailable? "Yes":"No"}</p>
                        <p className="font-weight-bold">Qty: </p><p>{chosenDrug.Quantity}</p>
                        <p className="font-weight-bold">Last stocked</p><p>25/02/2021</p>
                        <p className="font-weight-bold text-nowrap">Manufacturer</p><p>{chosenDrug.Manufacturer}</p>
                    </div>
                </Col>
                <Col span={{md:1}} className="mt-5">
                <ButtonGroup vertical>
                    <DeleteButton id={id}/>
                    {/* <EditButton id={id}/> */}
                </ButtonGroup> 
                </Col>
            </Row>
        </Container>
      </>
    )
}

const mapStateToProps=(state)=>{
    return{drugs:state.drugs.drugs}
}


export default  connect(mapStateToProps, null)(DrugPage)