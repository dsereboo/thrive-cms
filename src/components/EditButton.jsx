import React from "react";
import "../stylesheets/actionButtons.css"
import {Button,Row} from "react-bootstrap"
import{BsPencilSquare} from "react-icons/bs"
import { IconContext } from "react-icons"

const EditButton=()=>{
    return(
        <Row>
        <Button variant="success" className="action" size="lg">
            <IconContext.Provider value={{size:"20px"}}>
               <BsPencilSquare/> 
            </IconContext.Provider> 
        </Button>
        </Row>
    )
}


export default EditButton