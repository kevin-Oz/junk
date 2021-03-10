import React, { useState, useEffect }  from "react";
import Options from './Options.js';
import OptionBar from './OptionBar.js';


import { Card, Button,Row, Col }  from 'react-bootstrap'

//data
const styles = [
  {title: 'Style of Design (UI/UX)',package: 'N/N', price: 0, percent: 0},
  {title: '',package: 'simple', price: 2000, percent: 40},
  {title: '',package: 'Moderatery Styled', price: 3000, percent: 70,},
  {title: '',package: 'Highend', price: 5000, percent: 100},
];

const copyWriting = [
  {title: 'Copywriting # of pages',package: 'N/N', price: 0, percent: 0},
  {title: '',package: '5-10 pages', price: 2000, percent: 40},
  {title: '',package: '10-25 pages', price: 3000, percent: 70,},
  {title: '',package: '25-50+ pages', price: 5000, percent: 100},
];

const seo = [
  {title: 'Seo w/ placement Guarantee',package: 'N/N', price: 0, percent: 0},
  {title: '',package: '30 keywords', price: 2000, percent: 40},
  {title: '',package: '80 keywords', price: 4000, percent: 70,},
  {title: '',package: '150 keywords', price: 6000, percent: 100},
];

const database = [
  {title: 'Database Integration',package: 'N/N', price: 0, percent: 0},
  {title: '',package: 'Basic', price: 2000, percent: 40},
  {title: '',package: 'Advance', price: 4000, percent: 70,},
  {title: '',package: 'Full development', price: 10000, percent: 100},
];

const ecommerce = [
  {title: 'E-Commerce Functionality',package: 'N/N', price: 0, percent: 0},
  {title: '',package: 'Basic', price: 2000, percent: 30},
  {title: '',package: 'Advance', price: 4000, percent: 60,},
  {title: '',package: 'Full development', price: 10000, percent: 100},
];


const cms = [
  {title: 'CMS',package: 'N/N', price: 0, percent: 0},
  {title: '',package: 'Basic', price: 2000, percent: 40},
  {title: '',package: 'Advance', price: 4000, percent: 70,},
  {title: '',package: 'Full development', price: 10000, percent: 100},
];

const pages = [
  {title: '# Pages',package: 'N/N', price: 0, percent: 0},
  {title: '',package: '1-10 pages', price: 1000, percent: 30},
  {title: '',package: '10-50 pages', price: 2000, percent: 60,},
  {title: '',package: '50 - 150 pages', price: 3000, percent: 80},
  {title: '',package: '150 - 250 pages', price: 6500, percent: 100},
];

function Calculator() {

  const [resp, setResp] = useState(0);
  const [st, setSt] = useState(0);
  const [copy, setCopy] = useState(0);
  const [seoo, setSeoo] = useState(0);
  const [db, setDb] = useState(0);
  const [eco, setEco] = useState(0);
  const [cmss, setCmss] = useState(0);
  const [page, setPage] = useState(0);
 
  const [total, setTotal] = useState(0);

  
  useEffect( ()=>{
    setTotal(st+copy+seoo+db+eco+cmss+page + resp);
  },[st,copy,seoo,db,eco,cmss,page,resp]);
  
  

  return (
  <div>  
    <Card className="mt-4">
    <Card.Body>
    <Card.Title>Website Price Calculator</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Check Custom Website price</Card.Subtitle>
    <div>
    <Options price={setResp} ></Options>
    <OptionBar values={styles} price={setSt} ></OptionBar>
    <OptionBar values={copyWriting} price={setCopy}></OptionBar>
    <OptionBar values={seo} price={setSeoo}></OptionBar>
    <OptionBar values={pages} price={setPage}></OptionBar>
    <OptionBar values={database} price={setDb}></OptionBar>
    <OptionBar values={ecommerce} price={setEco}></OptionBar>
    <OptionBar values={cms} price={setCmss}></OptionBar>
    </div>
    <Row className="row">
      <Col className="mt-3" > 
      </Col>
      <Col className="mt-3" >
      <span >ESTIMATED QUOTE $ {total}</span>
      </Col>
    </Row>
    
    </Card.Body>
   </Card>
 </div>
  );
}

export default Calculator;