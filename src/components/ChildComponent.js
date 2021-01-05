import React from 'react'

// passing method as props from the parent component
function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent