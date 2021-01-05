import React, { Component } from 'react'


// binding event handlers
class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }

        // this.clickHandler = this.clickHandler.bind(this) binding
    }
    
    // clickHandler() {
    //     this.setState({
    //         message: "Goodbye!"
    //     })
    // }

    // approach 4 for binding event handlers
    clickHandler = () => {
        this.setState({
            message: 'Goodbye'
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Clicked</button> */}
                {/* <button onClick={() => this.clickHandler()}>Clicked</button> */}
                <button onClick={this.clickHandler}>Clicked</button>
            </div>
        )
    }
}

export default EventBind