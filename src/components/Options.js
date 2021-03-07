import React, { useState, useEffect } from "react";
import {Button, ProgressBar, Row, Col} from 'react-bootstrap'


export default function Options(props) {
 //control of state to the progressBar

const [responsive, setResponsive] = useState(0);
//control of state to result
const [result, setResult] = useState(0);

//state of price responsive
const [responsiveDesing,setResponsiveDesing] =useState(0);


const yResponsive = () =>{
  setResponsive(100);
  setResponsiveDesing(3000);
}
const nResponsive = () =>{
  setResponsive(0);
  setResponsiveDesing(0);

}


const sumatoria =()=>{
  setResult(result+responsiveDesing);
}


useEffect( ()=>{
  console.log(responsiveDesing);
},[responsive]);


  return (
    <div>
      <Row>
        <Col className="col-2">
          <span>Responsive Design</span>
        </Col>
        <Col className="col-1">
          <Button onClick={nResponsive} variant="outline-primary">- </Button>{" "}
        </Col>
        <Col className="col-8 p-0 m-0">
          <ProgressBar variant="info" label="yes" now={responsive} />
        </Col>
        <Col className="col-1">
          <Button onClick={yResponsive} variant="outline-primary">
            +{" "}
          </Button>{" "}
        </Col>
      </Row>


    </div>
  );
}
