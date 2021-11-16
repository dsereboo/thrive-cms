import React,{useEffect} from "react";
import { Row,Container} from "react-bootstrap";
import { connect } from "react-redux";
import { getDrugs } from "../redux/actions/drugActions";
import DrugCard from "./DrugCard";

const CardRows=(props)=>{

    useEffect(
        ()=>{props.getDrugs()},[props]
    )

    return (
      <Container>
        <Row>
          {props.drugs.map((drug) => (
            <DrugCard drug={drug} key={drug.id} />
          ))}
        </Row>
      </Container>
    );
}

const mapStateToProps=(state)=>{
   return{drugs:state.drugs.drugs}
}


const mapDispatchToProps={
    getDrugs:getDrugs
}

export default connect(mapStateToProps, mapDispatchToProps)(CardRows)