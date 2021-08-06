import React, { Fragment } from 'react'

export default props => {

    return (
        <Fragment>
            <p>Valor inicial: {props.numeroInicial}</p>
            <p>Valor atual: {props.numero}</p>
        </Fragment>
    )
}