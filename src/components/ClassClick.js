import React, { Component } from 'react'

// event handling for class based component
class ClassClick extends Component {
    clickHandler() {
        console.log("Clicked the handler")
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click Me, class based</button>
            </div>
        )
    }
}

export default ClassClick