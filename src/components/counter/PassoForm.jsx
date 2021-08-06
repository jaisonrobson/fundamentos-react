import React from 'react'

export default props => {

    return (
        <div>
            <label htmlFor="passoInput">Passo: </label>
            <input id="passoInput" type="num" value={props.passo} onChange={(event) => props.setPasso(parseInt(event.target.value))} />
        </div>
    )
}