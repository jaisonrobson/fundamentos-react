import React from 'react'

export default props => {
    return (
        <div>
            <div>{props.texto}</div>
            <div><strong>{props.numero}</strong></div>
            <div>{props.bool ? 'Verdadeiro' : 'Falso'}</div>
        </div>
    )
}