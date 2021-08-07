import './Mega.css'

import React, { Component, useState } from 'react'

import { gerarNumeros } from './mega.js'

export default props => {

    const [qtd, setQtd] = useState(props.qtd || 6)
    const numerosIniciais = gerarNumeros(qtd)
    const [numeros, setNumeros] = useState(numerosIniciais)

    return (
        <div className="Mega">
            <h2>Mega</h2>

            <h3>{numeros.join(' ')}</h3>

            <label>Qtde de numeros</label>

            <input
                type="number"
                min="6"
                max="60"
                value={qtd}
                onChange={(event) => {
                    setQtd(+event.target.value)
                    setNumeros(gerarNumeros(+event.target.value))
                }}
            />

            <button onClick={() => setNumeros(gerarNumeros(qtd))}>Gerar numeros</button>
        </div>
    )
}