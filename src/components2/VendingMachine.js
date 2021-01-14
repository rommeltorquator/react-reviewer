import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Message from '../components/Message'

class VendingMachine extends Component {
    render() {
        return (
            <div>                                
                <Message>
                    <h1>Vending machine</h1>
                </Message>
                <Message>
                    <Link exact to='/soda'>Soda</Link>
                    <Link exact to='/chips'>Chips</Link>
                    <Link exact to='/sardines'>Sardines</Link>
                </Message>
            </div>
        )
    }
}

export default VendingMachine
// 22 - 1