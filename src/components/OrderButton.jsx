import React from "react";
import "../stylesheets/actionButtons.css"
import {Button, Row} from "react-bootstrap"
import { FaTruck} from "react-icons/fa";
import { IconContext } from "react-icons"

const OrderButton=()=>{
    return(
        <Row>
        <Button variant="info" className="action" size="lg">
            <IconContext.Provider value={{size:"20px"}}>
               <FaTruck/> 
            </IconContext.Provider> 
        </Button>
        </Row>
    )
}


export default OrderButton