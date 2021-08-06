import './Contador.css'

import React from 'react'

class Contador extends React.Component {
    state = {
        numero: 0,
        passo: 5,
    }

    constructor(props) {
        super(props)

        this.state = {
            numero: props.numeroInicial || 0,
            passo: props.passoInicial || 5,
        }

        this.inc = this.inc.bind(this) //Necessario fazer o bind caso nao utilize funcao ARROW do javascript
        this.dec = this.dec.bind(this) //Necessario fazer o bind caso nao utilize funcao ARROW do javascript
    }

    inc() {
        this.setState({
            numero: this.state.numero + this.state.passo,
        })
    }

    dec() {
        this.setState({
            numero: this.state.numero - this.state.passo,
        })
    }

    // Sem o bind do construtor (ARROW function)
    // inc = () => {
    //     this.setState({
    //         numero: this.state.numero + 1,
    //     })
    // }

    setPasso = (event) => {
        this.setState({
            passo: +event.target.value, //Usar o mais (+) para converter a string para numero
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>
                <p>Valor inicial: {this.props.numeroInicial}</p>
                <p>Valor atual: {this.state.numero}</p>
                <div>
                    <label htmlFor="passoInput">Passo: </label>
                    <input id="passoInput" type="num" value={this.state.passo} onChange={this.setPasso} />
                </div>
                <button onClick={this.inc}>+</button>
                <button onClick={this.dec}>-</button>
                {/* <button onClick={() => this.inc()}>Incrementar</button> */} {/* Outra forma sem a necessidade do bind */}
            </div>
        )
    }
}

export default Contador