import './Contador.css'

import React from 'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

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

    setPasso = (novoPasso) => {
        this.setState({
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div className="Contador">
                <h2>Contador</h2>

                <Display numeroInicial={this.props.numeroInicial} numero={this.state.numero} />

                <PassoForm passo={this.state.passo} setPasso={this.setPasso} />

                <Botoes incrementar={this.inc} decrementar={this.dec} />
                {/* <button onClick={() => this.inc()}>Incrementar</button> */} {/* Outra forma sem a necessidade do bind */}
            </div>
        )
    }
}

export default Contador