import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from "react-bootstrap"
import { connect } from "react-redux";
import { addDrug, addImage } from "../redux/actions/drugActions";

const AddDrug=(props)=>{

    // const[Image, setImage]=useState(null)
    const[drug,setDrug]=useState({
        Name:"", Manufacturer:"", Quantity:"", SerialNum:"", 
    })

    // const handleImageChange=(event)=>{
    //   const reader = new FileReader();
    //   let file = event.target.files[0]; // get the supplied file
    //   // if there is a file, set image to that file
    //   if (file) {
    //     reader.onload = () => {
    //       if (reader.readyState === 2) {
    //         setImage(file);
    //         setDrug({...drug, [event.target.name]:file.name})
    //       }
    //     };
    //     reader.readAsDataURL(event.target.files[0]);
    //     // if there is no file, set image back to null
    //   } else {
    //     setImage(null);
    //   }
    // }
    

    const handleChange=(event)=>{
        setDrug({...drug, [event.target.name]:event.target.value})
        console.log(props.state)
    }

    const handleSubmit=async (event)=>{
        event.preventDefault()
        props.addDrug(drug)
        console.log(props.state)
        
    }

    // props.addImage(Image)
    

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control onChange={handleChange} name="Name" type="text" />
        </Form.Group>
        {/* <Form.Group controlId="formFile" className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control name="Image" type="file" onChange={handleImageChange} />
        </Form.Group> */}
        <Form.Group className="mb-3">
          <Form.Label>Manufacturer</Form.Label>
          <Form.Control
            onChange={(event)=>handleChange(event)}
            name="Manufacturer"
            type="text"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Serial Number</Form.Label>
          <Form.Control onChange={handleChange} name="SerialNum" type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control name="category" as="select" onChange={handleChange}>
            <option>Laxative</option>
            <option>Antacid</option>
            <option>Painkiller</option>
            <option>Dewormer</option>
            <option>Contraceptive</option>
            <option>Opiod-painkiller</option>
          </Form.Control>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Quantity</Form.Label>
          <Form.Control onChange={handleChange} name="Quantity" type="Number" />
        </Form.Group>
        <div className="text-center mt-4">
          <Button size="lg" variant="dark" type="submit" block>
            Add
          </Button>
        </div>
      </Form>
    );
}


const mapStateToProps=(state)=>{
  return{state:state.drugs}
}

const mapDispatchToProps={
    addDrug: addDrug,
    addImage:addImage,
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDrug)