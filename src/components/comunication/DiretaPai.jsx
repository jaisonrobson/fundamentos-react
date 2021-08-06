import React from 'react'

import DiretaFilho from './DiretaFilho'

export default props => {
    return (
        <div>
            <DiretaFilho texto="Filomena" numero={20} bool={false} />
            <DiretaFilho texto="Claudioneia" numero={15} bool={true} />
        </div>
    )
}