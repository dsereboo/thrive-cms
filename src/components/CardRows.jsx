import React from "react";
import { Row,Container} from "react-bootstrap";
import DrugCard from "./DrugCard";

const CardRows=()=>{

    const drugs=[
        {id:"s#vjoc", serialNum:"#90576745894850458", name:"Diclofenac 100mg", qty:"32"},
        {id:"#fj09x", serialNum:"#90576745894850458",name:"Coaterm 200mg", qty:"30"},
        {id:"#djx809", serialNum:"#90576745894850458", name:"Paracetamol 500mg", qty:"20"},
        {id:"3xj@xjks", serialNum:"#2095847898090908", name:"Lydia Contraceptive 100mg", qty:"15"},
        {id:"s#vjoc", serialNum:"#90576745894850458", name:"Diclofenac 100mg", qty:"32"},
        {id:"#fj09x", serialNum:"#90576745894850458",name:"Coaterm 200mg", qty:"30"},
        {id:"#djx809", serialNum:"#90576745894850458", name:"Paracetamol 500mg", qty:"20"},
        {id:"3xj@xjks", serialNum:"#2095847898090908", name:"Lydia Contraceptive 100mg", qty:"15"},
        {id:"s#vjoc", serialNum:"#90576745894850458", name:"Diclofenac 100mg", qty:"32"},
        {id:"#fj09x", serialNum:"#90576745894850458",name:"Coaterm 200mg", qty:"30"},
        {id:"#djx809", serialNum:"#90576745894850458", name:"Paracetamol 500mg", qty:"20"},
        {id:"3xj@xjks", serialNum:"#2095847898090908", name:"Lydia Contraceptive 100mg", qty:"15"},
    ]

    return (
      <Container>
        <Row>
          {drugs.map((drug) => (
            <DrugCard drug={drug} key={drug.id} />
          ))}
        </Row>
      </Container>
    );
}

export default CardRows