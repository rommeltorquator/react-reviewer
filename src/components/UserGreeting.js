import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn: false
        }
    }
    

    render() {
        // short circuit operator
        // return this.state.isLoggedIn && <div>Welcome Rommel</div>

        // element variable approach
        // let message
        // if(this.state.isLoggedIn) {
        //     message = <div>Welcome Rommel</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>

        // ternary can be used inside jsx
        return (
            this.state.isLoggedIn ? <div>Welcome Rommel</div> : <div>Welcome Guest</div>
        )


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