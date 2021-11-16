import React,{useState} from "react";
import "../stylesheets/actionButtons.css"
import {Button, Row} from "react-bootstrap"
import{BsTrashFill} from "react-icons/bs"
import { IconContext } from "react-icons"
import DeleteModal from "./DeleteModal";
import { useParams } from "react-router";

const DeleteButton=(props)=>{

    const[show, setShow]=useState(false)
    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)
    
    return(
        <Row>
        <DeleteModal show={show} onHide={handleClose} id={props.id} />
        <Button onClick={handleShow} variant="danger" className="action" size="lg">
            <IconContext.Provider value={{size:"20px"}}>
               <BsTrashFill/> 
            </IconContext.Provider> 
        </Button>
        </Row>
    )
}


export default DeleteButton