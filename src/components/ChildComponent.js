import React from 'react'
// methods as props
// arrow function is used to pass a parameter from child to parent component
// ParentComponent is the parent component of this child component

function ChildComponent(props) {
    // passing parameter from child to parent component
    // you can also destructure the prop even if it is a method
    return (
        <div>
            <button onClick={() => props.greetHandler('child')}>Greet parent</button>
        </div>
    )
}

export default ChildComponent