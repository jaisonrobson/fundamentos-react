import React from 'react'

class Contador extends React.Component {
    state = {
        numero: 0,
    }

    constructor(props) {
        super(props)

        this.state = {
            numero: props.numeroInicial,
        }

        this.inc = this.inc.bind(this) //Necessario fazer o bind caso nao utilize funcao ARROW do javascript
    }

    inc() {
        this.setState({
            numero: this.state.numero + 1,
        })
    }

    // Sem o bind do construtor (ARROW function)
    // inc = () => {
    //     this.setState({
    //         numero: this.state.numero + 1,
    //     })
    // }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <p>Valor inicial: {this.props.numeroInicial}</p>
                <p>Valor atual: {this.state.numero}</p>
                <button onClick={this.inc}>Incrementar</button>
                {/* <button onClick={() => this.inc()}>Incrementar</button> */} {/* Outra forma sem a necessidade do bind */}
            </div>
        )
    }
}

export default Contador