import React from 'react'

// destructuring props
function Person({person}) {
    return (
        <div>
            <h2>I am {person.name} age {person.age}</h2>
        </div>
    )
}

export default Person
