import React from 'react'
import Person from './Person'

// import ChildComponent from './ChildComponent'
// lists and keys topic

function NameList() {
    const names = ['Rommel', 'Melo', 'Toshi'];
    // const persons = [
    //     {
    //         id: 1,
    //         name: "Rommel",
    //         age: 30
    //     },
    //     {
    //         id: 2,
    //         name: "Melo",
    //         age: 19
    //     },
    //     {
    //         id: 3,
    //         name: "Toshi",
    //         age: 16
    //     },
    // ]

    // const nameList = names.map(name => <h2>{name}</h2>) // another way of looping an array
    // const personList = persons.map(person => <Person person={person} />)

    // the child component receives the object
    // the key property, use index as key anti pattern
    // research about the proper way of using the right key
    return (
        <div>
            {
                // persons.map(person => <Person key={person.id} person={person} />)
                names.map((name, index) => <h2 key={index}>{name}</h2>)
            }
        </div>
    )
}

export default NameList