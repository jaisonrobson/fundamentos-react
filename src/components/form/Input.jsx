import './Input.css'

import React, { useState } from 'react'

export default props => {
    const [valor, setValor] = useState('Inicial')

    return (
        <div className="Input">
            <h2>{valor}</h2>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
            }}>
                <h3>Controlled</h3>
                <input value={valor} onChange={(event) => { setValor(event.target.value) }} /> { /* CONTROLLED COMPONENT */}
                <input value={valor} readOnly /> { /* CONTROLLED COMPONENT */}
                <h3>Uncontrolled</h3>
                <input value={undefined} /> { /* UNCONTROLLED COMPONENT */}
            </div>
        </div>
    )
}