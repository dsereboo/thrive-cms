import React,{useState} from "react"
import "../stylesheets/uploadButton.css"
import {Button, Form, Modal} from "react-bootstrap"
import{BsFillCloudUploadFill} from "react-icons/bs"
import { IconContext } from "react-icons"
// import UploadModal from "./UploadModal"
import { connect } from "react-redux"
import { addImage } from "../redux/actions/drugActions"
import AddDrug from "./AddDrug";

const FloatButton=(props)=>{


  const[show, setShow]=useState(false)
  const handleShow=()=>setShow(true)
  const handleClose=()=>setShow(false)

    return (
      <>       
       <ImageModal add={props.addImage} close={handleClose}  show={show} onHide={handleClose}/>
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

// const mapStateToProps=(state)=>{}
const mapDispatchToProps={
  addImage: addImage
}

export default connect(null,mapDispatchToProps)(FloatButton)



//Image upload Modal
const ImageModal=(props)=>{

  const[show2,setShow2]=useState(false)
  const handleShow2=()=>{setShow2(true)}
  const handleClose2=()=>{setShow2(false)}

  const[Image, setImage]=useState(null)

  const handleImageChange=(event)=>{
    const reader = new FileReader();
    let file = event.target.files[0]; // get the supplied file
    // if there is a file, set image to that file
    if (file) {
      reader.onload =async () => {
        if (reader.readyState === 2) {
          setImage(file);
        }
      };
      reader.readAsDataURL(event.target.files[0]);
      // if there is no file, set image back to null
    } else {
      setImage(null);
    }
  }

  const handleSubmit=(event)=>{
    event.preventDefault()
    props.add(Image)
    props.close()
    handleShow2()
  }

  return (
    <>
    <UploadModal show={show2} onHide={handleClose2}/>
    <Modal {...props}>
      <Modal.Header>
        <Modal.Title>Drug Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formFile" className="mb-4 pb-4">
            <Form.Label>Image</Form.Label>
            <Form.Control
              name="Image"
              type="file"
              onChange={handleImageChange}
            />
          </Form.Group>
          <div className="text-center mt-4">
            <Button size="lg" variant="dark" type="submit" block>
              Add
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
    </>
  );
}



//Item upload modal

const UploadModal=(props)=>{
  //State to control display of modal
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




