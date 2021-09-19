import React from 'react';    //allow to use jsx code(tell compiler)
import Destructuring from './destructuring';
import './App.css';

const employee = {
  id: "ABC",
  name: "Nacha",
  salary: "$3000",
  address: {
    salary: "$30000",
    street: "210 Washington Street",
    country: "Canada",
    province: "Ontario",
    zone:{
      plantZone: "78",
      alienZone: "41",
    }
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Destructuring </h1>
        <Destructuring {...employee}/>
      </header>
    </div>
  );
}

export default App;
