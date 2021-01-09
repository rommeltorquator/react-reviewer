import React from 'react';
// JSX

const Hello = () => {
    // using JSX
    // return (
    //     <div>
    //         <h1>This is JSX topic</h1>
    //     </div>
    // )

    // no JSX
    return React.createElement('div', null, React.createElement('h1', null, 'Hello Rommel, this is JSX topic'))

    // class - className
    // for - htmlFor
    // camelCase property naming - ex. onClick, tabIndex
}

export default Hello