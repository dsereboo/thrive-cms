import React from "react";
import "../stylesheets/actionButtons.css"
import {Button, Row} from "react-bootstrap"
import {IoMdLocate} from "react-icons/io";
import { IconContext } from "react-icons"

const LocateButton=()=>{
    return(
        <Row>
        <Button variant="primary" className="action" size="lg">
            <IconContext.Provider value={{size:"20px"}}>
               <IoMdLocate/> 
            </IconContext.Provider> 
        </Button>
        </Row>
    )
}


export default LocateButton