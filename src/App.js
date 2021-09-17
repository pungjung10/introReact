import React from 'react';    //allow to use jsx code(tell compiler)
import Employee from './Employee';
import './App.css';


const employeeInfo = [
  {
    firstName: "Jack",
    lastName: "Smith",
    age: 21,
    employeeId: "1",
  },
  {
    firstName: "Pung",
    lastName: "Ping",
    age: 21,
    employeeId: "2",
  },
  {
    firstName: "Jung",
    lastName: "Kung",
    age: 21,
    employeeId: "3",
  },
  {
    firstName: "Hiw",
    lastName: "Mak",
    age: 21,
    employeeId: "4",
  },
]

function App() {

  //map - edit/look though each item in an array
  return (
    <div className="App">
      <header className="App-header">
        <h1> Company Directory </h1>
        {employeeInfo.map(employee => {
          // const {firstName, lastName, age} = employee
          return(
            // <Employee firstName={firstName} lastName={lastName} age = {age}/>
            <Employee key={employee.employeeId} {...employee}/> //spread
          )
        })}

        {/* <Employee firstName="Jack" lastName="Smith" age = "21"/>
        <Employee firstName="Pung" lastName="Ping" age = "21"/>
        <Employee firstName="Jung" lastName="Kung" age = "21"/>
        <Employee firstName="Hiw" lastName="Mak" age = "21"/> */}
      </header>
    </div>
  );
}

export default App;
