import React from 'react'

import IndiretaFilho from './IndiretaFilho'

export default props => {

    function fornecerInformacoes(nome, idade, nerd) {

    }

    return (
        <div>
            Pai
            <IndiretaFilho onClick={fornecerInformacoes} />
        </div>
    )
}