import React, { Component } from 'react'
// pure component

// regular component does not implement shouldComponentUpdate function

class RegComp extends Component {
    render() {
        console.log("regular component");

        return (
            <div>
                regular component {this.props.name}
            </div>
        )
    }
}

export default RegComp
// rce