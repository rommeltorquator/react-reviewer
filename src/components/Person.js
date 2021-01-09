import React from 'react'
// LIST RENDERING, deconstructing props

function Person({person}) {
    return (
        <div>
            <h2>I am {person.name}. I am {person.age} years old. I am good at {person.skill}</h2>
        </div>
    )
}

export default Person