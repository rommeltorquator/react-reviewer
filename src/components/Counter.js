import React, { Component } from 'react'
// SETSTATE topic, callback function is the second parameter on setState to access the updated state, using a function on setState for using previous state

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count: 0
        }
    }

    // when updating a state based on a previous state, pass a function as an argument to setState instead of passing an object, the function has access to previous state which can be used to manipulate the new state

    // callback function is the second parameter
    increment() {
        // object passed in setState, arrow function on the second parameter for accessing the updated state
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log(this.state.count)
        // })

        // pass a function instead of an object in setState, if planning to use the previous state, props is the second parameter
        this.setState((prevState, props) => ({
            count: prevState.count + 1
        }))
    }
    
    // react has a tendency to group multiple setStates into one for performance
    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter