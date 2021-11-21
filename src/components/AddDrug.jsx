import React,{useState} from "react";
import {Form, Button} from "react-bootstrap"
import { connect } from "react-redux";
import { addDrug } from "../redux/actions/drugActions";

const AddDrug=(props)=>{

    const[drug,setDrug]=useState({
        Name:"", Manufacturer:"", Quantity:"", SerialNum:"",
    })

    const handleChange=(event)=>{
        setDrug({...drug, [event.target.name]:event.target.value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        props.addDrug(drug)
    }

    return(
        <Form onSubmit={handleSubmit}>
         <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control onChange={handleChange} name="Name" type="text" />
        </Form.Group>  
        <Form.Group>
            <Form.Label>Manufacturer</Form.Label>
            <Form.Control onChange={handleChange} name="Manufacturer" type="text" />
        </Form.Group>
        <Form.Group>
            <Form.Label>Serial Number</Form.Label>
            <Form.Control onChange={handleChange} name="SerialNum" type="text" />
        </Form.Group>  
        <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control name="category" as="select" onChange={handleChange}>
                <option>Laxative</option>
                <option>Antacid</option>
                <option>Painkiller</option>
                <option>Opiod-painkiller</option>
            </Form.Control>
        </Form.Group>
        <Form.Group>
            <Form.Label>Quantity</Form.Label>
            <Form.Control onChange={handleChange} name="Quantity" type="Number" />
        </Form.Group> 
        <div className="text-center mt-4">
            <Button size="lg" variant="dark" type="submit" block>Add</Button>
        </div>
       
    </Form> 
    )
}

const mapDispatchToProps={
    addDrug: addDrug
}

export default connect(null, mapDispatchToProps)(AddDrug)