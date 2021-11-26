import React from "react";
import {Modal} from "react-bootstrap"
import AddDrug from "./AddDrug";

const UploadModal=(props)=>{
    return (
      <Modal {...props}>
        <Modal.Header >
          <Modal.Title>Drug Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <AddDrug/>
        </Modal.Body>
      </Modal>
    );
}

export default UploadModal