import React from 'react'
// memo

// to avoid re-render if there is no changes in props

function MemoComp({name}) {
    console.log('Rendering Memo Component')
    return (
        <div>
            {name}
        </div>
    )
}

// implementing memo component, higher order component
export default React.memo(MemoComp)
// rfce