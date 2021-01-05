// class-based components
import React, { Component } from 'react';

// destructuring for class based component
class Welcome extends Component {
    render() {
        const {name, heroName} = this.props

        return <h1>Hello, Class based {name} a.k.a {heroName}</h1>
        // return <h1>Hello, Class based {this.props.name} a.k.a {this.props.heroName}</h1>
    }
}

export default Welcome