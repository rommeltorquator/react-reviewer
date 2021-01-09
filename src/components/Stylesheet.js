import React from 'react'
import './myStyles.css'
// styling and css basics, css applies to child components

function Stylesheet(props) {
    let className = props.primary ? 'primary' : '';

    return (
        <div>
            <h1 className={`${className} font-xl`} >Stylesheets</h1>
        </div>
    )
}

export default Stylesheet