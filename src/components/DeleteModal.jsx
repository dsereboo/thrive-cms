import React from "react";
import { Modal,Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { deleteDrug } from "../redux/actions/drugActions";

const DeleteModal=(props)=>{

    const history=useHistory()
    
    const handleDelete=()=>{
        props.deletedrug(props.id)
        history.push("/")
    }

   

    return(
        <Modal {...props} centered>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Confirm removal from inventory? </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

const mapDispatchToProps={
    deletedrug:deleteDrug
}

export default connect(null, mapDispatchToProps)(DeleteModal)