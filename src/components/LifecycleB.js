import React, { Component } from 'react'
// Component Mounting Lifecycle Methods, must know the order of execution

// order of execution
// LifecycleA constructor
// LifecycleA getDerivedStateFromProps
// LifecycleA render
// LifecycleA componentDidMount

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Rommel"
        }
        console.log('LifecycleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifecycleB getDerivedStateFromProps')
        return null
    }
    
    componentDidMount() {
        console.log('LifecycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifecycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifecycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifecycleB componentDidUpdate')
    }

    render() {
        console.log('LifecycleB render')
        return (
            <div>
                <h1>Lifecycle A</h1>               
            </div>
        )
    }
}

export default LifecycleB
