import React from "react";

//prop is easentially a variable that pass from a parent component to a child component
const Employee = (props) =>{
    // can use {props.firstName} {props.lastName}
    // or making its own variable (same name / use colon)
    const {firstName, lastName, age: employeeAge} = props;
    return(
        <div>
            {/* "${prop.firstName}" */}
            <h6> Employee Name: {firstName} {lastName} who is age: {employeeAge}</h6>
        </div>  
    )
}

export default Employee;