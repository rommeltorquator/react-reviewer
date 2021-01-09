import React, { Component } from 'react'
import ChildComponent from './ChildComponent' // method as props
// methods as props
// when passing methods as props to child, define the method in the parent component, pass the method on the child component as a prop, access the method using the props object in the child component

class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
             parentName: "Parent"
        }

        // binding event handler, third approach
        this.greetParent = this.greetParent.bind(this)
    }

    // passing a parameter from child component to parent component, go to ChildComponent
    greetParent(childName) {
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }

    render() {
        // greetParent methods is passed as a prop for ChildComponent
        return (
            <div>
                <ChildComponent greetHandler={this.greetParent} />
            </div>
        )
    }
}

export default ParentComponent