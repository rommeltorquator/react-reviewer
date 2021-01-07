import React from 'react'
// EVENT HANDLING, adding method in a function component, no parenthesis

function FunctionClick() {
    function clickHandler() {
        console.log("Button clicked");
    }

    // no parenthesis on clickHandler inside the onClick to avoid running the function  
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )
}

export default FunctionClick