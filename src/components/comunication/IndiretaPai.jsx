import React, { useState } from 'react'

import IndiretaFilho from './IndiretaFilho'

export default props => {
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [bool, setBool] = useState(false)

    function fornecerInformacoes(nomeParam, idadeParam, boolParam) {
        setNome(nomeParam)
        setIdade(idadeParam)
        setBool(boolParam)
    }

    return (
        <div>
            <div>
                <span>{nome + ' '}</span>
                <span><strong>{idade + ' '}</strong></span>
                <span>{bool ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho onClick={fornecerInformacoes} />
        </div>
    )
}