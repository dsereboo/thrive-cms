import React,{useState} from "react"
import "../stylesheets/uploadButton.css"
import {Button} from "react-bootstrap"
import{BsFillCloudUploadFill} from "react-icons/bs"
import { IconContext } from "react-icons"
import UploadModal from "./UploadModal"

const FloatButton=(props)=>{


  const[show, setShow]=useState(false)
  const handleShow=()=>setShow(true)
  const handleClose=()=>setShow(false)

    return (
      <>
       <UploadModal show={show} onHide={handleClose}/>
      <Button
        variant="dark"
        size="lg"
        className="btn-float"
        onClick={handleShow}
      >
        <IconContext.Provider value={{size:"40px"}}>
               <BsFillCloudUploadFill/> 
       </IconContext.Provider>      
       
      </Button>
      </>
    );
}

export default FloatButton