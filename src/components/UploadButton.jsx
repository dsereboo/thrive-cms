import React,{useState} from "react"
import "../stylesheets/uploadButton.css"
import {Button, Modal, ModalBody, Row} from "react-bootstrap"
import { IconContext } from "react-icons"
import {BsCloudUpload} from "react-icons/bs"
import UploadModal from "./UploadModal"


// const UploadModal=(props)=>{
//     //State to control display of modal
//     return(
//         <Modal {...props}>
//             <ModalBody>
//                 <h1>Hello a modal is here!!</h1>
//             </ModalBody>
//         </Modal>
//     )
// }

const UploadButton=(props)=>{

    const[show, setShow]=useState(false)
    const handleShow=()=>setShow(true)
    const handleClose=()=>setShow(false)
 
    return(
        <>
        <UploadModal show={show} onHide={handleClose}/>
        <Button onClick={handleShow} variant="primary custom" className="btn-float" size="lg" >
            <Row className="uploadBtn-row">
            <IconContext.Provider value={{size:"1.5em"}}>
                <BsCloudUpload/>   
            </IconContext.Provider>
            <p className="custom-text">Upload</p>
            </Row>
        </Button>
        </>
    )
}

export default UploadButton