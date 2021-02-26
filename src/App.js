import React, { useState, useEffect } from "react";
import './App.css';
import Employee from './components/Employees.js';
const people = [
  "Juan",
  "Alexa",
  "Roberto",
  "Julia",
  "Jennifer",
  "Roman",
  "Susan"
];
function App() {

  const [employees, setEmployee] = useState(people);
  const [search, setSearchResults] = useState("");
  useEffect(() => {
    const results = people.filter(person =>
      person.toLowerCase().includes(search)
    );
    setEmployee(results);
  }, [search]);


  const handleChange = event => {
    setSearchResults(event.target.value);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={handleChange}
      />

      <Employee employees={employees}></Employee>

    </div>
  );
}

export default App;
