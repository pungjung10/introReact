import React, { useState } from 'react';  

//arrow function
const Counter = () => {
    //use state hook : re render
    const [count, setCount] = React.useState(0);    //[actualVariable,function] = (0)->default value

    // const handleIncrement = () => {
    //     setCount(count + 1)
    // };
    const handleDecrement = () => {
        setCount(count - 1)
    };

    return(
        // return has to have only one top level component => solv by used React.Fragment(div but no styling)
        <div>
            <p>The count is: {count}</p>
            <button onClick={() => setCount(count + 1)}> Increment </button>
            <button onClick={handleDecrement}> Decrement </button>
        </div>
    )    
};

export default Counter;