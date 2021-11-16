import React from "react";
import {Modal,ModalBody} from "react-bootstrap"

const UploadModal=(props)=>{
    //State to control display of modal
    return(
        <Modal {...props}>
            <ModalBody>
                <h1>Hello a modal is here!!</h1>
            </ModalBody>
        </Modal>
    )
}

export default UploadModal