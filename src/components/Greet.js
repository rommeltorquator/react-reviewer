// function-based components
import React, { Children } from 'react';

// function Greet() {
//     return <h1>Hello Rommel</h1>
// }

// arrow function, destructuring for function based component
const Greet = ({name, heroName}) => {    
    // const {name, heroName} = props, change the parameter to props

    return (
        <div>
            <h1>Hello function based {name} a.k.a {heroName}</h1>                  
        </div>        
    )
}

export default Greet;