import React from 'react'

export default props => {
    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={props.onClick('Joao', 51, true)}>Fornecer Informacoes</button>
        </div>
    )
}