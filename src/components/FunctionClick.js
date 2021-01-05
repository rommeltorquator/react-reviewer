import React from 'react'

// event handling for function based component
function FunctionClick() {
    function clickHandler() {
        console.log("Button clicked")
    }

    return (
        <div>
            <button onClick={clickHandler}>Click, function based</button>
        </div>
    )
}

export default FunctionClick