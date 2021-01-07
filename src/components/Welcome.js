import React, { Component } from 'react'
// CREATING CLASS COMPONENTS, feature rich, complex UI logic, provide lifecycle hooks, has state, (stateful, smart, container)

// PROPS topic, use this to render props if class based component, props are immutable, destructuring props in a class component, destructuring state

class Welcome extends Component {
    render() {
        const {name, heroName} = this.props
        // const {state1, state2} = this.state destructuring state
        return (
            // <h1>This is a class component, Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
            <h1>This is a class component, Welcome {name} a.k.a {heroName}</h1>
        )
    }
}

export default Welcome