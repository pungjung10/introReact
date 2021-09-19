import React from 'react';    //allow to use jsx code(tell compiler)
import MapLoop from './mapAndLoop';
import './App.css';

const employees = [
  {
    name:"Pung",
    id:"123",
  },
  {
    name:"Jung",
    id:"456",
  },
  {
    name:"PJ",
    id:"789",
  },
  {
    name:"Nacha",
    id:"101",
  },
  
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Map and Loop </h1>
        {/* map should have key at top level */}
        {employees.map((employee) => 
          <MapLoop key={employee.id} {...employee}/>
        )}
        
      </header>
    </div>
  );
}

export default App;
