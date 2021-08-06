import React from 'react'

export default props => {
    const min = 50
    const max = 70
    const gerarIdade = () => parseInt(Math.random() * (max - min)) + min

    return (
        <div>
            <div>
                Filho
            </div>
            <button onClick={() => props.onClick('Joao', gerarIdade(), true)}>Fornecer Informacoes</button>
        </div>
    )
}