import React, { useState, useEffect } from "react";
import {Button, ProgressBar, Row, Col} from 'react-bootstrap'


export default function Options(props) {
 //control of state to the progressBar
 const { price } = props;

const [responsive, setResponsive] = useState(0);
//control of state to result

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


useEffect( ()=>{
  price(responsiveDesing);
},[responsive]);


  return (
    <div>
      <Row className="m-1">
        <Col className="col-12 col-sm-12 col-md-4">
          <span>Responsive Design</span>
        </Col>
        <Col className="col-2 col-sm-2 col-md-1">
          <Button size="sm" onClick={nResponsive} variant="outline-primary">-</Button>{" "}
        </Col>
        <Col className="col-8 col-sm-8 col-md-6 p-0 mt-2 mx-0">
          <ProgressBar variant="info" label="yes" now={responsive} />
        </Col>
        <Col className="col-2 col-sm-2 col-md-1">
          <Button size="sm" onClick={yResponsive} variant="outline-primary">
            +{" "}
          </Button>{" "}
        </Col>
      </Row>
    </div>
  );
}
