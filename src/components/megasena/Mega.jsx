import './Mega.css'

import React, { Component } from 'react'

import { gerarNumeracao } from './mega.js'

export default class Mega extends Component {
    state = {
        quantidadeNumeros: 6,
        surpresinha: [],
    }

    setQuantidadeNumeros = (quantidadeNumeros) => {
        if (!quantidadeNumeros || quantidadeNumeros <= 0 || quantidadeNumeros > 60) return

        this.setState({
            quantidadeNumeros,
        })
    }

    setSurpresinha = () => {
        this.setState({
            surpresinha: gerarNumeracao(this.state.quantidadeNumeros),
        })
    }

    render() {

        return (
            <div className="Mega">
                <div>
                    <label htmlFor="qtdNumeros">Quantidade de numeros: </label>

                    <input
                        id="qtdNumeros"
                        type="number"
                        onChange={(e) => this.setQuantidadeNumeros(parseInt(e.target.value))}
                        value={this.state.quantidadeNumeros}
                    />
                </div>

                <button onClick={this.setSurpresinha}>Surpresinha</button>

                <h2>Surpresinha</h2>
                <p>
                    {
                        this.state.surpresinha.reduce(
                            (resultado, nmr) => resultado + ' ' + nmr, ''
                        )
                    }
                </p>
            </div>
        )
    }
}