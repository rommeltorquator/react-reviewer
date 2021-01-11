import React from 'react'
import Columns from './Columns' // go to this js file
// fragments

// for using the short hand symbol, you cannot pass a key

function Table() {
    return (
        <table>
            <tbody>
                <tr><Columns /></tr>
            </tbody>
        </table>
    )
}

export default Table