import React from "react";
import "../stylesheets/actionButtons.css"
import {Button, Row} from "react-bootstrap"
import{BsTrashFill} from "react-icons/bs"
import { IconContext } from "react-icons"

const DeleteButton=()=>{
    return(
        <Row>
        <Button variant="danger" className="action" size="lg">
            <IconContext.Provider value={{size:"20px"}}>
               <BsTrashFill/> 
            </IconContext.Provider> 
        </Button>
        </Row>
    )
}


export default DeleteButton