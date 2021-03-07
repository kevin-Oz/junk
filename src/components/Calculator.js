import React  from "react";
import Options from './Options.js';
import OptionBar from './OptionBar.js';


import { Card }  from 'react-bootstrap'

const styles = [
  {title: 'STYLE OF DESIGN (UI/UX)',package: 'N/N', price: 0, percent: 0},
  {title: '',package: 'simple', price: 2000, percent: 30},
  {title: '',package: 'Moderatery Styled', price: 3000, percent: 60,},
  {title: '',package: 'Highend', price: 5000, percent: 100},
];

const copyWriting = [
  {title: 'COPYWRITING # OF PAGES',package: 'N/N', price: 0, percent: 0},
  {title: '',package: '5-10 pages', price: 2000, percent: 30},
  {title: '',package: '10-25 pages', price: 3000, percent: 60,},
  {title: '',package: '25-50+ pages', price: 5000, percent: 100},
];

const seo = [
  {title: 'SEO W/ PLACEMENT GUARANTEE',package: 'N/N', price: 0, percent: 0},
  {title: '',package: '30 keywords', price: 2000, percent: 30},
  {title: '',package: '80 keywords', price: 4000, percent: 60,},
  {title: '',package: '150 keywords', price: 6000, percent: 100},
];

const database = [
  {title: 'DATABASE INTEGRATION',package: 'N/N', price: 0, percent: 0},
  {title: '',package: 'Basic', price: 2000, percent: 30},
  {title: '',package: 'Advance', price: 4000, percent: 60,},
  {title: '',package: 'Full development', price: 10000, percent: 100},
];

const ecommerce = [
  {title: 'E-COMMERCE FUNCTIONALITY',package: 'N/N', price: 0, percent: 0},
  {title: '',package: 'Basic', price: 2000, percent: 30},
  {title: '',package: 'Advance', price: 4000, percent: 60,},
  {title: '',package: 'Full development', price: 10000, percent: 100},
];


const cms = [
  {title: 'CMS',package: 'N/N', price: 0, percent: 0},
  {title: '',package: 'Basic', price: 2000, percent: 30},
  {title: '',package: 'Advance', price: 4000, percent: 60,},
  {title: '',package: 'Full development', price: 10000, percent: 100},
];

const pages = [
  {title: 'PAGES',package: 'N/N', price: 0, percent: 0},
  {title: '',package: '1-10 pages', price: 1000, percent: 30},
  {title: '',package: '10-50 pages', price: 2000, percent: 60,},
  {title: '',package: '50 - 150 pages', price: 3000, percent: 80},
  {title: '',package: '150 - 250 pages', price: 6500, percent: 100},
];

function Calculator() {

  return (
  <div >  
        <Card className="mt-4">
    <Card.Body>
    <Card.Title>Website Price Calculator</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Check Custom Website price</Card.Subtitle>
    <Card.Text>
    <Options ></Options>
    <OptionBar values={styles}></OptionBar>
    <OptionBar values={copyWriting}></OptionBar>
    <OptionBar values={seo}></OptionBar>
    <OptionBar values={pages}></OptionBar>
    <OptionBar values={database}></OptionBar>
    <OptionBar values={ecommerce}></OptionBar>
    <OptionBar values={cms}></OptionBar>
    </Card.Text>
    <Card.Link className="btn btn-primary" href="#">SEE PRICING</Card.Link>
    </Card.Body>
   </Card>
 </div>
  );
}

export default Calculator;