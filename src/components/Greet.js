import React from 'react'
// CREATING FUNCTIONAL COMPONENTS, absence of this keyword, does not use state, (stateless, dumb, presentational), used for rendering UI, hooks

// PROPS TOPIC, passing child props component, props are immutable, destructuring props in the function constructor and function body

// normal function version
// function Greet() {
//     return <h1>Hello Rommel</h1>
// }

// arrow function version, destructuring props on the parameter
// const Greet = ({name, heroName}) => {
//     return (
//         <div>
//             {/* <h1>Hello {props.name} a.k.a {props.heroName}</h1> */}
//             <h1>Hello {name} a.k.a {heroName}</h1>
//             {props.children}
//         </div>
//     )
// }

// destructuring props on function body
const Greet = (props) => {
    const {name, heroName} = props

    return (
        <div>
            {/* <h1>Hello {props.name} a.k.a {props.heroName}</h1> */}
            <h1>Hello {name} a.k.a {heroName}</h1>
            {props.children}
        </div>
    )
}

export default Greet;