import React, { Component } from 'react'
// EVENT HANDLER binding, used when binding an event to manipulate a state, there are 4 ways to bind, use approach 3 or 4

// 1.) binding in the render method
// 2.) use arrow functions in the render method
// 3.) binding event handler inside the constructor, mostly used
// 4.) use arrow function as a class property, change the way of defining a method inside the class, use arrow function, recommended

class EventBind extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message: "Hello"
        }

        // this.clickHandler = this.clickHandler.bind(this) third approach
        // <button onClick={this.clickHandler}></button> syntax inside the onclick
    }

    // clickHandler() {
    //     this.setState({
    //         message: "Goodbye"
    //     })
    //     console.log(this);
    // }

    // 4th approach
    clickHandler = () => {
        this.setState({
            message: "Goodbye"
        })
    }
    // onClick={this.clickHandler} also used in 4th approach inside the onClick
    
    render() {
        // binding event handler is used to bind an event for state manipulation
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click</button> first approach */}
                {/* <button onClick={() => this.clickHandler()}>Click</button> second approach */}
                <button onClick={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default EventBind