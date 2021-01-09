import React, { Component } from 'react'
// basics of form handling, controlled react components

// 3 steps
// add the html element
// assign the component state to the element value
// assign an onChange handler that updates the state

class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            username: '',
            comments: '',
            topic: 'React'
        }
    }

    // when assigning a handler to a change event, the event is passed as a parameter to the handler
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    // create a submit button that has a type of submit, and always add preventDefault
    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault()
    }
    
    render() {
        // destructuring state
        const {username, comments, topic} = this.state

        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.handleUsernameChange} />
                </div>
                <div>
                    <label>Comments</label>
                    <textarea value={comments} onChange={this.handleCommentsChange}></textarea>
                </div>
                <div>
                    <label>Topic</label>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form