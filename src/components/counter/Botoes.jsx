import React, { Fragment } from 'react'

export default props => {

    return (
        <Fragment>
            <button onClick={props.incrementar}>+</button>
            <button onClick={props.decrementar}>-</button>
        </Fragment>
    )
}