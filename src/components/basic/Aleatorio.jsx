import React, { Fragment } from 'react'

const gerarAleatorio = (min, max) => {
    const numero = Math.ceil((Math.random() * (max - (min - 1))))

    return (min - 1) + numero
}

export default ({ min, max }) => {
    const numero = gerarAleatorio(min, max)

    return (
        <Fragment>
            <h2>Numero aleatorio</h2>
            <p>
                <strong>Valor minimo: </strong> {min}
            </p>
            <p>
                <strong>Valor maximo: </strong> {max}
            </p>
            <p>
                {`O numero sorteado foi: `}
                {numero}
            </p>
        </Fragment>
    )
}