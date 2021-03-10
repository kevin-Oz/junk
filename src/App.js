import React  from "react";
import './App.css';
import Calculator from './components/Calculator.js';
import {Container} from 'react-bootstrap'

function App() {


  return (
    <div className="App">
      <Container>
        <Calculator></Calculator>
      </Container>
    </div>
  );
}

export default App;
