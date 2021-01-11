import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';
// pure components, memo components

// pure component is used to prevent unnecessary renders
// do not mutate object or array in props or state
// if parent does not re-render, child does not re-render

// class ParentComp extends PureComponent {
class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: "Rommel"
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: "Rommel"
            })
        }, 2000);
    }
    
    render() {
        console.log("Parent component")
        return (
            <div>
                Parent component
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}
            </div>
        )
    }
}

export default ParentComp
// rce