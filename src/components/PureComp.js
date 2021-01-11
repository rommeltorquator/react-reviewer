import React, { PureComponent } from 'react'
// pure component

// pure component implements shouldComponentUpdate function with a shallow prop and state comparison
// never mutate the state if using pure components
// pure components only with with class-based components
// pure components are used to prevent uneccessary render, primivite and reference data types explanation
// if there is not difference, the component is not re-rendered
// if using a pure component, use also pure components as child components

class PureComp extends PureComponent {
    render() {
        console.log("pure component")

        return (
            <div>
                Pure component {this.props.name}
            </div>
        )
    }
}

export default PureComp
// rpce - to create pure react component