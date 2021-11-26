import React from "react";
import { Modal,Button } from "react-bootstrap";
import { connect } from "react-redux";
import { useHistory, } from "react-router";
import { deleteDrug } from "../redux/actions/drugActions";

const DeleteModal=(props)=>{

    const history=useHistory()
    // const location=useLocation()

    // console.log(location)
    
    const handleDelete=()=>{
      console.log(props.state)
        props.deletedrug(props.id)
        history.push("/")
       
    }

    

   

    return(
        <Modal {...props} centered>
        <Modal.Header >
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

const mapStateToProps=(state)=>{
  return{state:state}
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteModal)