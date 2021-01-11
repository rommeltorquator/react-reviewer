import React from 'react'
// fragments, passing key to react fragment, shorthand of react fragment

// for using the short hand symbol, you cannot pass a key

function Columns() {
    const items = [];

    // fragment short hand example
    return (
        <>
            {/* {
                items.map(item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            } */}
            <td>Name</td>
            <td>Rommel</td>
        </>                    
    )
}

export default Columns