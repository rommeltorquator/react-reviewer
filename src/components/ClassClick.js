import React, { Component } from 'react'
// EVENT HANDLING on class component

// add the this keyword on class components for accessing methods, parameters
class ClassClick extends Component {
    clickHandler() {
        console.log("Clicked the button");
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>
            </div>
        )
    }
}

export default ClassClick