import React, { Component } from 'react'
import axios from 'axios'
// loading data via ajax, axios, componentDidMount, componentDidUpdate

// npm install axios
// not to set the state inside the constructor, always fetch data inside componentDidMount
// api source - https://api.github.com/zen

class ZenQuote extends Component {
    // never set the state inside the component
    constructor(props) {
        super(props)

        this.state = {
             quote: '',
             isLoaded: false
        }
    }
    
    // always fetch data inside the componentDidMount
    componentDidMount() {
        // load data, do it inside componentDidMount
        axios.get('https://api.github.com/zen').then(response => {
            // set state with that data
            setTimeout(
                function() {
                    this.setState({ quote: response.data, isLoaded: true })
                }.bind(this), 3000
            );
        })
    }

    // this method is called after every render occurs
    componentDidUpdate() {
        console.log("Component did update")
    }

    render() {
        return (
            <div>
                <div className="loader"></div>
                <h1>Always remember...</h1>
                <p>{this.state.quote}</p>
            </div>
        )
    }
}

export default ZenQuote