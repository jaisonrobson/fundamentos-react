import React from 'react'

export default props => (
    <div>
        {
            props.numero % 2 === 0 ?
                <span>Par</span> :
                <span>Impar</span>
        }
    </div>
)