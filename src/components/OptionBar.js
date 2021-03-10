import React, { useState, useEffect } from "react";
import {Button, ProgressBar, Row, Col} from 'react-bootstrap'


export default function OptionBar(props) {
  const {values=[],price} = props;

  const [progress, setprogress] = useState(0);
  const [contador, setContador] = useState(0);

const increment = ()=>{
  if(contador<values.length-1){
    setContador(contador+1);
  }
}

const decrement = () =>{
  if(contador>0){
    setContador(contador-1);
  }
    }


useEffect( ()=>{
  setprogress(values[contador].percent);
  price(values[contador].price);
},[contador,progress]);


  return (
    <div>
      <Row className="m-1">
        <Col className="col-12 col-sm-12 col-md-4">
          <span>{values[0].title}</span>
        </Col>
        <Col className="col-2 col-sm-2 col-md-1">
          <Button size='sm' onClick={decrement} variant="outline-primary">- </Button>{" "}
        </Col>
        <Col className="col-8 col-sm-8 col-md-6 p-0 mt-2 mx-0">
          <ProgressBar variant="info" label={values[contador].package} now={progress} />
        </Col>
        <Col className="col-2 col-sm-2 col-md-1">
          <Button size='sm' onClick={increment} variant="outline-primary">
            +{" "}
          </Button>{" "}
        </Col>
      </Row>
    </div>
  );
}