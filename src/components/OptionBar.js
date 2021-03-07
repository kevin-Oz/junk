import React, { useState, useEffect } from "react";
import {Button, ProgressBar, Row, Col} from 'react-bootstrap'


export default function OptionBar(props) {
  const {values=[]} = props;

  const [progress, setprogress] = useState(0);
  const [contador, setContador] = useState(0);

const increment = ()=>{
  console.log('actual: ',contador);

 
  if(contador<values.length-1){
    setContador(contador+1);
    console.log('despues: ',contador);
  }
    

  
}

const decrement = () =>{
  console.log('actual: ',contador);
  if(contador>0){
    setContador(contador-1);
    console.log('despues: ',contador);
  
  }
    }


useEffect( ()=>{
  setprogress(values[contador].percent);
},[contador,progress]);


  return (
    <div>
      <Row>
        <Col className="col-2">
          <span>{values[0].title}</span>
        </Col>
        <Col className="col-1">
          <Button onClick={decrement} variant="outline-primary">- </Button>{" "}
        </Col>
        <Col className="col-8 p-0 m-0">
          <ProgressBar variant="info" label={values[contador].package} now={progress} />
        </Col>
        <Col className="col-1">
          <Button onClick={increment} variant="outline-primary">
            +{" "}
          </Button>{" "}
        </Col>
      </Row>
    </div>
  );
}