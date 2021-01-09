import React, { Component } from 'react'
import LifecycleB from './LifecycleB' // Component Mounting Lifecycle Methods
// Component Mounting Lifecycle Methods, must know the order of execution, Component Updating Lifecycle Methods

// order of execution
// LifecycleA constructor
// LifecycleA getDerivedStateFromProps
// LifecycleA render
// LifecycleA componentDidMount

// updating lifecycle methods
// static getDerivedStateFromProps(props, state), method is called every time a component is re-rendered, rarely used in the updating phase
// shouldComponentUpdate(nextProps, nextState), dictates if the component shoud re-render or not, rarely used
// render()
// getSnapshotBeforeUpdate(props, state), rarely used method
// componentDidUpdate(prevProps, prevState), called after the render is finished in the re-render cycles

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Rommel"
        }
        console.log('LifecycleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleA getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleA componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: "State updated motha fukaa"
        })
    }

    render() {
        console.log('LifecycleA render')
        return (
            <div>
                <h1>Lifecycle A</h1>         
                <button onClick={this.changeState}>Change state</button>
                <LifecycleB />     
            </div>
        )
    }
}

export default LifecycleA