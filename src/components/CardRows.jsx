import React,{useEffect} from "react";
import { Row,Container} from "react-bootstrap";
import { connect } from "react-redux";
import { getDrugs } from "../redux/actions/drugActions";
import DrugCard from "./DrugCard";

const CardRows=(props)=>{

    // const drugs=[
    //     {id:"svjoc", serialNum:"#90576745894850458", name:"Diclofenac 100mg", qty:"32"},
    //     {id:"cbfj09x", serialNum:"#90576745894850458",name:"Coaterm 200mg", qty:"30"},
    //     {id:"asddjx809", serialNum:"#90576745894850458", name:"Paracetamol 500mg", qty:"20"},
    //     {id:"3xj@xjks", serialNum:"#2095847898090908", name:"Lydia Contraceptive 100mg", qty:"15"},
    //     {id:"svdsj", serialNum:"#90576745894850458", name:"Diclofenac 100mg", qty:"32"},
    //     {id:"tydsjj09x", serialNum:"#90576745894850458",name:"Coaterm 200mg", qty:"30"},
    //     {id:"dfddu809", serialNum:"#90576745894850458", name:"Paracetamol 500mg", qty:"20"},
    //     {id:"3xioks", serialNum:"#2095847898090908", name:"Lydia Contraceptive 100mg", qty:"15"},
    //     {id:"si0dc", serialNum:"#90576745894850458", name:"Diclofenac 100mg", qty:"32"},
    //     {id:"asfjdsj09x", serialNum:"#90576745894850458",name:"Coaterm 200mg", qty:"30"},
    //     {id:"asddjznkx809", serialNum:"#90576745894850458", name:"Paracetamol 500mg", qty:"20"},
    //     {id:"3xjs9ks", serialNum:"#2095847898090908", name:"Lydia Contraceptive 100mg", qty:"15"},
    // ]

    useEffect(
        ()=>{props.getDrugs()},[]
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
   console.log(state)
   return{drugs:state.drugs.drugs}
}


const mapDispatchToProps={
    getDrugs:getDrugs
}

export default connect(mapStateToProps, mapDispatchToProps)(CardRows)