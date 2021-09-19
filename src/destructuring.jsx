import React from "react";

const destructuring = (props) => {
    //have 2 salary (employee $ address)
    const {name, id, salary:employeeSalary, address:{salary:addressSalary, zone} } = props;
    const {plantZone,alienZone} = zone;
    return(
        <div>
            <h2>{name}</h2>
            <h2>{id}</h2>
            <h2>{employeeSalary}</h2>
            <h2>{addressSalary}</h2>
            <h2>{plantZone}</h2>
        </div>
    )
}

export default destructuring;