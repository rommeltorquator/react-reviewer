import React, { Component } from 'react'
// CONDITIONAL RENDERING

// 1.) if else condition, if else do not work inside the JSX
// 2.) using element variables to store the JSX
// 3.) ternary operator, mostly used, very simple
// 4.) short circuit operator

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
             isLoggedIn: true
        }
    }

    render() {
        // fourth approach, short circuit operator
        // return this.state.isLoggedIn && <div>Welcome Rommel</div>

        // third approach, ternary
        return (
            this.state.isLoggedIn ? <div>Welcome Rommel</div> : <div>Welcome Guest</div>
        )

        // second approach, using element variable
        // let message 
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Rommel</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // first approach, if else statement
        // if(this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             <div>Welcome Rommel</div>
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>                    
        //             <div>Welcome guest</div>
        //         </div>
        //     )
        // }

        // return (
        //     <div>
        //         <div>Welcome Rommel</div>
        //         <div>Welcome guest</div>
        //     </div>
        // )
    }
}

export default UserGreeting