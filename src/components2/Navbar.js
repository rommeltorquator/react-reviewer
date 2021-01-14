import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
            <div>
                <NavLink exact activeClassName="active" to='/'>Home</NavLink>
                <NavLink exact activeClassName="active" to='/chips'>Chips</NavLink>
                <NavLink exact activeClassName="active" to='/soda'>Soda</NavLink>
                <NavLink exact activeClassName="active" to='/sardines'>Sardines</NavLink>
            </div>
        )
    }
}

export default Navbar