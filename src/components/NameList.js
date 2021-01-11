import React from 'react'
import Person from './Person' // child component, list rendering
// LIST RENDERING, using map to render a component, lists and keys, index as key anti-pattern

// keys are not accessible in the child components 

// use index as a key when:
// items on your list do not have a unique id
// the list is a static list and not change
// the list will never be reordered or filtered

function NameList() {
    // const names = ['Rommel', 'Toshi', 'Melo']
    const persons = [
        {
            id: 1,
            name: "Rommel",
            age: 30,
            skill: "React"
        },
        {
            id: 2,
            name: "Toshi",
            age: 16,
            skill: "Video games"
        },
        {
            id: 3,
            name: "Melo",
            age: 20,
            skill: "Basketball"
        },
    ]
    
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    // const nameList = names.map(name => <h2>{name}</h2>)

    // add index to the second parameter of the arrow function
    // const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)
    return (
        <div>
            {
                // names.map(name => <h2>{name}</h2>)
                personList
                // nameList
            }
        </div>
    )
}

export default NameList